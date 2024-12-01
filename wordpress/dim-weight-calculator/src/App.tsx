@@ .. @@
-import React from 'react';
+import { createElement } from '@wordpress/element';
 import { Package, Truck, ExternalLink } from 'lucide-react';
 import DimensionalCalculator from './components/Calculator';
 import FreightCalculator from './components/FreightCalculator';
-import { dimWeightFormulas } from './data/dimWeightFormulas';
-import { freightCarriers } from './data/freightCarriers';
+import { DimWeightFormula } from './types/calculator';
 
-function App() {
+interface AppProps {
+  carriers: DimWeightFormula[];
+}
+
+function App({ carriers }: AppProps) {
   return (
     <div className="min-h-screen bg-gray-100">
       <div className="max-w-4xl mx-auto py-12 px-4">
@@ .. @@
           Choose your carrier below to calculate the applicable shipping weight for your package.
         </p>
 
-        {dimWeightFormulas.map((formula) => (
+        {carriers.map((formula) => (
           <DimensionalCalculator key={formula.name} formula={formula} />
-        ))}
-        
-        <div className="mt-12">
-          <div className="flex items-center gap-3 mb-8">
-            <Truck className="w-8 h-8 text-[#D42027]" />
-            <h2 className="text-2xl font-bold text-gray-900">
-              Freight Carriers
-            </h2>
-          </div>
-          
-          <p className="text-gray-600 mb-8">
-            Freight carriers often use different dimensional factors based on service levels.
-            Select your carrier and service type below to calculate the applicable freight charges.
-          </p>
-
-          {freightCarriers.map((carrier) => (
-            <FreightCalculator key={carrier.name} carrier={carrier} />
-          ))}
-        </div>
+        ))}        
       </div>
     </div>
   );
-}