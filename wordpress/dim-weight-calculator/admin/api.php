<?php
if (!defined('ABSPATH')) {
    exit;
}

function dwc_get_carriers_data() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'dim_weight_settings';
    
    $carriers = $wpdb->get_results("
        SELECT * FROM {$table_name} 
        WHERE is_active = 1 
        ORDER BY carrier_name
    ");
    
    return array_map(function($carrier) {
        return [
            'name' => $carrier->carrier_name,
            'divisor' => floatval($carrier->divisor),
            'serviceLevel' => $carrier->service_level
        ];
    }, $carriers);
}