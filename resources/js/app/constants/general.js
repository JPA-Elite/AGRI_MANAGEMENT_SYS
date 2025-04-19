export const BARANGAYS = [
    'Bairan',
    'Bagawines',
    'Cabulihan',
    'Don Esperidion Villegas',
    'Guba',
    'Macapso',
    'Maglahos',
    'Malangsa',
    'Molobolo',
    'Pinocawan',
    'Poblacion',
    'Puan',
    'Tabon',
    'Tagbino',
    'Ulay'
];

export const LIVELIHOODS = [
    'Farmer',
    'Farmworker',
    'Fisherfolk',
    'Agri Youth'
];

export const BARANGAY_COORDINATES = {
    "Bairan": { lat: 10.3842, lng: 123.3009 },
    "Bagawines": { lat: 10.3601, lng: 123.3206 },
    "Cabulihan": { lat: 10.3745, lng: 123.3009 },
    "Don Esperidion Villegas": { lat: 10.317, lng: 123.3272 },
    "Guba": { lat: 10.307, lng: 123.2756 },
    "Macapso": { lat: 10.3767, lng: 123.3234 },
    "Maglahos": { lat: 10.3957, lng: 123.2644 },
    "Malangsa": { lat: 10.3204, lng: 123.3065 },
    "Molobolo": { lat: 10.2901, lng: 123.3177 },
    "Pinocawan": { lat: 10.3362, lng: 123.2756 },
    "Poblacion": { lat: 10.3344, lng: 123.3121 },
    "Puan": { lat: 10.3233, lng: 123.3234 },
    "Tabon": { lat: 10.3004, lng: 123.3121 },
    "Tagbino": { lat: 10.375, lng: 123.2756 },
    "Ulay": { lat: 10.3606, lng: 123.2953 },
};

export const MAP_CENTER = {
    lat: 10.3344, // Vallehermoso Poblacion
    lng: 123.3121
};

export const EQUIPMENT_TYPES = [
    'Hand Tractor',
    'Water Pump',
    'Thresher',
    'Harvester',
    'Planter',
    'Sprayer',
    'Rotavator',
    'Rice Transplanter',
    'Seed Spreader',
    'Mini Tiller',
    'Power Weeder',
    'Reaper',
    'Combine Harvester',
    'Irrigation System',
    'Mist Blower',
    'Power Sprayer',
    'Mulcher',
    'Cultivator'
];

export const FERTILIZER_TYPES = [
    'Urea',
    'Complete (14-14-14)',
    'Ammonium Sulfate',
    'Ammonium Phosphate',
    'Muriate of Potash',
    'Triple 14',
    'Triple 16',
    'Organic Fertilizer'
];

export const REQUEST_STATUS_OPTIONS = ['pending', 'approved', 'rejected'];

export const REQUEST_OPTIONS = {
    FARMER: {
        type: 'farmer',
        categories: [
            {
                name: 'Fertilizer',
                value: 'fertilizer',
                specific: [
                    'Organic Fertilizer',
                    'Chemical Fertilizer',
                    'Bio Fertilizer',
                    'Nitrogen Fertilizer',
                    'Phosphorus Fertilizer'
                ]
            },
            {
                name: 'Crops',
                value: 'crops',
                specific: [
                    'Rice Seeds (Inbred)',
                    'Rice Seeds (Hybrid)',
                    'Yellow Corn Seeds',
                    'White Corn Seeds',
                    'Vegetable Seeds'
                ]
            }
        ],
        quantities: [
            { label: 'Bags', value: 'bags' },
            { label: 'Kilos', value: 'kilos' }
        ],
        tools: {
            'Organic Fertilizer': [
                { name: 'Compost Bin', type: 'Composting Container' },
                { name: 'Temperature Monitor', type: 'Monitoring Tool' },
                { name: 'Screening Tool', type: 'Quality Control' },
                { name: 'Measuring Tools', type: 'Dosage Control' },
                { name: 'Storage Bin', type: 'Safe Keeping' },
                { name: 'Labeling Stickers', type: 'Identification Aid' },
                { name: 'Protective Gloves', type: 'Hand Protection' },
                { name: 'Application Guide', type: 'Instruction Manual' }
            ],
            'Chemical Fertilizer': [
                { name: 'Protective Suit', type: 'Safety Gear' },
                { name: 'Chemical Sprayer', type: 'Application Tool' },
                { name: 'Measuring Cup', type: 'Precise Measurement' },
                { name: 'Storage Bin', type: 'Safe Keeping' },
                { name: 'Labeling Stickers', type: 'Identification Aid' },
                { name: 'Safety Gloves', type: 'Hand Protection' },
                { name: 'Chemical Tester', type: 'Quality Check' },
                { name: 'Application Guide', type: 'Instruction Manual' }
            ],
            'Bio Fertilizer': [
                { name: 'Fermentation Vat', type: 'Processing Tool' },
                { name: 'Testing Kit', type: 'Quality Control' },
                { name: 'Storage Container', type: 'Safe Storage' },
                { name: 'Application Guide', type: 'Instruction Manual' },
                { name: 'Protective Gloves', type: 'Hand Protection' },
                { name: 'Safety Goggles', type: 'Eye Protection' },
                { name: 'Measuring Spoon', type: 'Dosage Control' },
                { name: 'Labeling Stickers', type: 'Identification Aid' }
            ],
            'Nitrogen Fertilizer': [
                { name: 'Safety Mask', type: 'Protection Equipment' },
                { name: 'Application Kit', type: 'Spreading Tools' },
                { name: 'Measuring Set', type: 'Dosage Control' },
                { name: 'Storage Bin', type: 'Safe Keeping' },
                { name: 'Labeling Tool', type: 'Identification Aid' },
                { name: 'Safety Gloves', type: 'Hand Protection' },
                { name: 'Chemical Tester', type: 'Quality Check' },
                { name: 'Application Guide', type: 'Instruction Manual' }
            ],
            'Phosphorus Fertilizer': [
                { name: 'Protection Gear', type: 'Safety Equipment' },
                { name: 'Spreader Tool', type: 'Application Device' },
                { name: 'Measurement Kit', type: 'Portion Control' },
                { name: 'Storage Bin', type: 'Safe Keeping' },
                { name: 'Labeling Tool', type: 'Identification Aid' },
                { name: 'Safety Gloves', type: 'Hand Protection' },
                { name: 'Chemical Tester', type: 'Quality Check' },
                { name: 'Application Guide', type: 'Instruction Manual' }
            ],
            'Rice Seeds (Inbred)': [
                { name: 'Seedling Tray', type: 'Germination Tool' },
                { name: 'Manual Seeder', type: 'Planting Tool' },
                { name: 'Watering Kit', type: 'Irrigation Set' },
                { name: 'Seed Storage Box', type: 'Organization Aid' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' },
                { name: 'Growth Monitor', type: 'Observation Tool' },
                { name: 'Transplanting Tools', type: 'Seedling Care' }
            ],
            'Rice Seeds (Hybrid)': [
                { name: 'Precision Seeder', type: 'Advanced Planting' },
                { name: 'Growth Monitor', type: 'Monitoring Tool' },
                { name: 'Nursery Set', type: 'Seedling Care' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Seed Storage Box', type: 'Organization Aid' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ],
            'Yellow Corn Seeds': [
                { name: 'Corn Planter', type: 'Planting Tool' },
                { name: 'Row Marker', type: 'Field Preparation' },
                { name: 'Seed Counter', type: 'Measuring Device' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Seed Storage Box', type: 'Organization Aid' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ],
            'White Corn Seeds': [
                { name: 'Seed Dropper', type: 'Planting Tool' },
                { name: 'Distance Guide', type: 'Spacing Tool' },
                { name: 'Planting Frame', type: 'Row Guide' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Seed Storage Box', type: 'Organization Aid' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ],
            'Vegetable Seeds': [
                { name: 'Mini Greenhouse', type: 'Seedling Protection' },
                { name: 'Seed Dispenser', type: 'Planting Aid' },
                { name: 'Garden Tools Set', type: 'Basic Equipment' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Plant Labels', type: 'Identification Tool' },
                { name: 'Seed Storage Box', type: 'Organization Aid' },
                { name: 'Transplanting Tools', type: 'Seedling Care' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ]
        }
    },
    FARMWORKER: {
        type: 'farmworker/laborer',
        categories: [
            {
                name: 'Field Work Equipment',
                specific: [
                    'Manual Tools',
                    'Protection Gear',
                    'Harvesting Tools',
                    'Planting Tools'
                ]
            },
            {
                name: 'Labor Support',
                specific: [
                    'Land Preparation',
                    'Crop Maintenance',
                    'Harvest Assistance',
                    'Post-Harvest Work'
                ]
            }
        ],
        tools: {
            'Manual Tools': [
                { name: 'Basic Tool Set', type: 'Field Work Kit' },
                { name: 'Maintenance Tools', type: 'Equipment Care' },
                { name: 'Storage Box', type: 'Tool Organization' },
                { name: 'Safety Gloves', type: 'Hand Protection' },
                { name: 'Hand Trowel', type: 'Digging Tool' },
                { name: 'Pruning Shears', type: 'Cutting Tool' },
                { name: 'Rake', type: 'Soil Preparation' },
                { name: 'Hoe', type: 'Weeding Tool' },
                { name: 'Shovel', type: 'Digging Tool' },
                { name: 'Spade', type: 'Soil Work' }
            ],
            'Protection Gear': [
                { name: 'Safety Set', type: 'Personal Protection' },
                { name: 'Work Clothes', type: 'Field Attire' },
                { name: 'First Aid Kit', type: 'Emergency Care' },
                { name: 'Sun Protection', type: 'Field Safety' },
                { name: 'Rain Gear', type: 'Weather Protection' },
                { name: 'Safety Boots', type: 'Footwear' },
                { name: 'Face Mask', type: 'Dust Protection' },
                { name: 'Ear Protection', type: 'Noise Reduction' },
                { name: 'Eye Protection', type: 'Vision Safety' },
                { name: 'Gloves', type: 'Hand Protection' }
            ],
            'Harvesting Tools': [
                { name: 'Cutting Tools', type: 'Manual Harvest' },
                { name: 'Collection Bags', type: 'Harvest Storage' },
                { name: 'Sorting Bins', type: 'Post-Harvest' },
                { name: 'Transport Cart', type: 'Harvest Transport' },
                { name: 'Harvest Knife', type: 'Cutting Tool' },
                { name: 'Sickle', type: 'Harvesting Tool' },
                { name: 'Scythe', type: 'Field Work' },
                { name: 'Harvest Basket', type: 'Collection Tool' },
                { name: 'Weighing Scale', type: 'Measurement Tool' },
                { name: 'Sorting Table', type: 'Post-Harvest' },
                { name: 'Packing Materials', type: 'Storage Aid' },
                { name: 'Transport Vehicle', type: 'Harvest Delivery' }
            ],
            'Planting Tools': [
                { name: 'Dibber Set', type: 'Planting Aid' },
                { name: 'Measuring Tools', type: 'Spacing Guide' },
                { name: 'Seed Container', type: 'Seed Storage' },
                { name: 'Transplanting Tools', type: 'Seedling Care' },
                { name: 'Seed Drill', type: 'Planting Device' },
                { name: 'Row Marker', type: 'Field Preparation' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Seedling Tray', type: 'Germination Tool' },
                { name: 'Trowel', type: 'Digging Tool' },
                { name: 'Hand Seeder', type: 'Planting Tool' },
                { name: 'Transplanter', type: 'Seedling Tool' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' }
            ],
            'Land Preparation': [
                { name: 'Plowing Equipment', type: 'Field Preparation' },
                { name: 'Tilling Tools', type: 'Soil Preparation' },
                { name: 'Weeding Tools', type: 'Field Maintenance' },
                { name: 'Soil Tester', type: 'Soil Analysis' },
                { name: 'Rotary Tiller', type: 'Soil Work' },
                { name: 'Plow', type: 'Field Preparation' },
                { name: 'Cultivator', type: 'Soil Work' },
                { name: 'Harrow', type: 'Field Preparation' },
                { name: 'Leveling Tool', type: 'Soil Work' },
                { name: 'Tractor', type: 'Field Equipment' }
            ],
            'Crop Maintenance': [
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Pest Control Kit', type: 'Protection Set' },
                { name: 'Weeding Equipment', type: 'Field Maintenance' },
                { name: 'Fertilizer Applicator', type: 'Application Tool' },
                { name: 'Irrigation System', type: 'Water Supply' },
                { name: 'Pesticide Sprayer', type: 'Protection Tool' },
                { name: 'Mulching Material', type: 'Soil Protection' },
                { name: 'Crop Monitoring Device', type: 'Observation Tool' },
                { name: 'Growth Regulator', type: 'Plant Care' }
            ],
            'Harvest Assistance': [
                { name: 'Harvesting Basket', type: 'Collection Tool' },
                { name: 'Sorting Equipment', type: 'Post-Harvest' },
                { name: 'Transportation Cart', type: 'Delivery Aid' },
                { name: 'Weighing Scale', type: 'Measurement Tool' },
                { name: 'Harvesting Knife', type: 'Cutting Tool' },
                { name: 'Harvesting Cart', type: 'Transport Tool' },
                { name: 'Packing Materials', type: 'Storage Aid' },
                { name: 'Sorting Table', type: 'Post-Harvest' },
                { name: 'Transport Vehicle', type: 'Harvest Delivery' },
                { name: 'Harvesting Gloves', type: 'Hand Protection' }
            ],
            'Post-Harvest Work': [
                { name: 'Drying Equipment', type: 'Storage Aid' },
                { name: 'Processing Tools', type: 'Quality Control' },
                { name: 'Packaging Set', type: 'Market Preparation' },
                { name: 'Storage Containers', type: 'Preservation' },
                { name: 'Drying Rack', type: 'Post-Harvest' },
                { name: 'Processing Equipment', type: 'Quality Control' },
                { name: 'Packaging Machine', type: 'Market Preparation' },
                { name: 'Storage Facility', type: 'Preservation' },
                { name: 'Sorting Equipment', type: 'Quality Control' },
                { name: 'Labeling Tools', type: 'Product Identification' }
            ]
        },
        schedule_options: [
            'Morning (6AM - 12PM)',
            'Afternoon (1PM - 6PM)',
            'Full Day (6AM - 6PM)'
        ]
    },
    FISHERFOLK: {
        type: 'fisherfolk',
        categories: [
            {
                name: 'Habitat Restoration',
                specific: [
                    'Mangrove Planting',
                    'Coral Reef Rehabilitation',
                    'Seaweed Farming',
                    'Fish Sanctuary Development',
                ]
            },
            {
                name: 'Weather Information',
                specific: [
                    'Weather Monitoring Device',
                    'Early Warning System',
                    'Weather Information Access',
                    'Storm Surge Advisory'
                ]
            },
            {
                name: 'Marketing Assistance',
                specific: [
                    'Market Linkage',
                    'Product Processing',
                    'Packaging Support',
                    'Cold Storage Access'
                ]
            }
        ],
        tools: {
            'Mangrove Planting': [
                { name: 'Planting Kit', type: 'Basic Tools Set' },
                { name: 'Soil Tester', type: 'Analysis Tool' },
                { name: 'GPS Device', type: 'Location Marking' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Seedling Tray', type: 'Germination Tool' },
                { name: 'Shovel', type: 'Digging Tool' },
                { name: 'Protective Gear', type: 'Safety Equipment' },
                { name: 'Planting Guide', type: 'Instruction Manual' },
                { name: 'Transport Cart', type: 'Seedling Transport' },
                { name: 'Growth Monitor', type: 'Observation Tool' },
                { name: 'Mulching Material', type: 'Soil Protection' },
                { name: 'Water Quality Tester', type: 'Monitoring Tool' },
                { name: 'Planting Frame', type: 'Row Guide' },
                { name: 'Weeding Tool', type: 'Field Maintenance' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ],
            'Coral Reef Rehabilitation': [
                { name: 'Monitoring Kit', type: 'Assessment Tools' },
                { name: 'Safety Equipment', type: 'Diving Gear' },
                { name: 'Documentation Set', type: 'Recording Tools' },
                { name: 'Coral Nursery Kit', type: 'Propagation Tools' },
                { name: 'Diving Equipment', type: 'Underwater Gear' },
                { name: 'Coral Fragging Tools', type: 'Propagation Aid' },
                { name: 'Water Quality Tester', type: 'Monitoring Tool' },
                { name: 'Mapping Device', type: 'Location Marking' },
                { name: 'Underwater Camera', type: 'Documentation Tool' },
                { name: 'Buoy Markers', type: 'Area Definition' },
                { name: 'Coral Restoration Kit', type: 'Rehabilitation Tools' }
            ],
            'Seaweed Farming': [
                { name: 'Cultivation Kit', type: 'Growing Tools' },
                { name: 'Quality Tester', type: 'Testing Equipment' },
                { name: 'Storage Container', type: 'Post-Harvest' },
                { name: 'Harvesting Tools', type: 'Collection Set' },
                { name: 'Water Quality Tester', type: 'Monitoring Tool' },
                { name: 'Seedling Tray', type: 'Germination Tool' },
                { name: 'Harvesting Net', type: 'Collection Tool' },
                { name: 'Drying Rack', type: 'Post-Harvest' },
                { name: 'Processing Equipment', type: 'Quality Control' },
                { name: 'Packaging Materials', type: 'Market Preparation' },
                { name: 'Transportation Cart', type: 'Delivery Aid' }
            ],
            'Fish Sanctuary Development': [
                { name: 'Boundary Markers', type: 'Area Definition' },
                { name: 'Monitoring System', type: 'Surveillance' },
                { name: 'Research Kit', type: 'Data Collection' },
                { name: 'Safety Equipment', type: 'Diving Gear' },
                { name: 'Underwater Camera', type: 'Documentation Tool' },
                { name: 'Fish Habitat Structures', type: 'Shelter Aid' },
                { name: 'Water Quality Tester', type: 'Monitoring Tool' },
                { name: 'Mapping Device', type: 'Location Marking' },
                { name: 'Fishing Gear', type: 'Catch Tools' },
                { name: 'Monitoring Buoys', type: 'Observation Tool' }
            ],
            'Weather Monitoring Device': [
                { name: 'Weather Station', type: 'Basic System' },
                { name: 'Data Logger', type: 'Recording Device' },
                { name: 'Maintenance Kit', type: 'Equipment Care' },
                { name: 'Solar Panel', type: 'Power Supply' },
                { name: 'Wind Speed Sensor', type: 'Measurement Tool' },
                { name: 'Rain Gauge', type: 'Precipitation Measurement' },
                { name: 'Temperature Sensor', type: 'Climate Monitoring' },
                { name: 'Humidity Sensor', type: 'Moisture Measurement' },
                { name: 'Data Analysis Software', type: 'Processing Tool' },
                { name: 'Mobile App', type: 'Information Access' }
            ],
            'Early Warning System': [
                { name: 'Alert Device', type: 'Warning Equipment' },
                { name: 'Communication Set', type: 'Emergency Contact' },
                { name: 'Backup Power', type: 'Emergency Supply' },
                { name: 'Signal Booster', type: 'Connection Aid' },
                { name: 'Emergency Radio', type: 'Information Access' },
                { name: 'Mobile App', type: 'Weather Update' },
                { name: 'Emergency Kit', type: 'Safety Equipment' },
                { name: 'Community Training', type: 'Preparedness Program' },
                { name: 'Alert Siren', type: 'Warning System' },
                { name: 'Communication Device', type: 'Contact Tool' }
            ],
            'Weather Information Access': [
                { name: 'Mobile Device', type: 'Information Access' },
                { name: 'Signal Booster', type: 'Connection Aid' },
                { name: 'Weather App', type: 'Digital Tool' },
                { name: 'Community Training', type: 'Preparedness Program' },
                { name: 'Emergency Kit', type: 'Safety Equipment' },
                { name: 'Alert System', type: 'Warning Device' },
                { name: 'Information Board', type: 'Public Awareness' },
                { name: 'Weather Radio', type: 'Broadcast Tool' },
                { name: 'SMS Alert System', type: 'Notification Tool' }
            ],
            'Storm Surge Advisory': [
                { name: 'Warning System', type: 'Alert Device' },
                { name: 'Communication Radio', type: 'Emergency Contact' },
                { name: 'Safety Kit', type: 'Protection Equipment' },
                { name: 'Emergency Plan', type: 'Preparedness Guide' },
                { name: 'Community Training', type: 'Preparedness Program' },
                { name: 'Evacuation Map', type: 'Safety Guide' },
                { name: 'Alert Siren', type: 'Warning Device' },
                { name: 'Mobile App', type: 'Weather Update' },
                { name: 'Emergency Contact List', type: 'Safety Resource' }
            ],
            'Market Linkage': [
                { name: 'Digital Scale', type: 'Weighing Tool' },
                { name: 'Storage Box', type: 'Product Container' },
                { name: 'Transport Kit', type: 'Delivery Equipment' },
                { name: 'Market Access Guide', type: 'Information Resource' },
                { name: 'Product Labeling Kit', type: 'Branding Tool' },
                { name: 'Promotion Materials', type: 'Marketing Set' },
                { name: 'Networking Platform', type: 'Connection Tool' },
                { name: 'Sales Training', type: 'Skill Development' },
                { name: 'Market Research Report', type: 'Business Insight' }
            ],
            'Product Processing': [
                { name: 'Processing Kit', type: 'Basic Equipment' },
                { name: 'Packaging Tools', type: 'Marketing Set' },
                { name: 'Quality Control Set', type: 'Testing Tools' },
                { name: 'Storage Containers', type: 'Product Preservation' },
                { name: 'Processing Equipment', type: 'Quality Control' },
                { name: 'Labeling Tools', type: 'Branding Device' },
                { name: 'Transport Cart', type: 'Delivery Aid' },
                { name: 'Marketing Materials', type: 'Promotion Set' },
                { name: 'Safety Equipment', type: 'Protection Gear' }
            ],
            'Packaging Support': [
                { name: 'Sealing Machine', type: 'Packaging Tool' },
                { name: 'Label Maker', type: 'Branding Device' },
                { name: 'Storage Bins', type: 'Organization Aid' },
                { name: 'Transport Cart', type: 'Delivery Aid' },
                { name: 'Packaging Materials', type: 'Product Protection' },
                { name: 'Weighing Scale', type: 'Measurement Tool' },
                { name: 'Packing Tape', type: 'Sealing Tool' },
                { name: 'Labeling Kit', type: 'Branding Set' },
                { name: 'Storage Bags', type: 'Product Preservation' }
            ],
            'Cold Storage Access': [
                { name: 'Cooler Box', type: 'Mobile Storage' },
                { name: 'Temperature Monitor', type: 'Control Device' },
                { name: 'Ice Maker', type: 'Preservation Tool' },
                { name: 'Storage Containers', type: 'Product Preservation' },
                { name: 'Refrigeration Unit', type: 'Cold Storage' },
                { name: 'Temperature Logger', type: 'Monitoring Device' },
                { name: 'Packing Materials', type: 'Product Protection' },
                { name: 'Transport Cart', type: 'Delivery Aid' },
                { name: 'Safety Equipment', type: 'Protection Gear' }
            ]
        }
    },
    YOUTH: {
        type: 'agri youth',
        categories: [
            {
                name: 'Training Equipment',
                specific: [
                    'Basic Agriculture Kit',
                    'Modern Farming Tools',
                    'Study Materials',
                    'Digital Devices'
                ]
            },
            {
                name: 'Project Support',
                specific: [
                    'School Garden Tools',
                    'Research Equipment',
                    'Documentation Kit',
                    'Learning Materials'
                ]
            }
        ],
        tools: {
            'Basic Agriculture Kit': [
                { name: 'Starter Tool Set', type: 'Learning Kit' },
                { name: 'Safety Equipment', type: 'Protection Gear' },
                { name: 'Garden Tools', type: 'Basic Practice' },
                { name: 'Seed Starter Kit', type: 'Germination Tools' },
                { name: 'Watering Can', type: 'Irrigation Aid' },
                { name: 'Soil Tester', type: 'Analysis Tool' },
                { name: 'Planting Guide', type: 'Instruction Manual' },
                { name: 'Growth Monitor', type: 'Observation Tool' },
                { name: 'Weeding Tool', type: 'Field Maintenance' },
                { name: 'Fertilizer Spreader', type: 'Application Tool' },
                { name: 'Pest Control Kit', type: 'Protection Set' }
            ],
            'Modern Farming Tools': [
                { name: 'Smart Sensor', type: 'Monitoring Device' },
                { name: 'Data Logger', type: 'Recording Tool' },
                { name: 'Mobile Apps', type: 'Digital Learning' },
                { name: 'Drone Technology', type: 'Aerial Monitoring' },
                { name: 'Hydroponic System', type: 'Soil-less Farming' },
                { name: 'Aquaponics Kit', type: 'Integrated Farming' },
                { name: 'Vertical Garden Setup', type: 'Space Optimization' },
                { name: 'Weather Station', type: 'Climate Monitoring' },
                { name: 'Irrigation System', type: 'Water Management' },
                { name: 'Precision Seeder', type: 'Advanced Planting' }
            ],
            'Study Materials': [
                { name: 'Reference Books', type: 'Learning Resource' },
                { name: 'Digital Library', type: 'Online Access' },
                { name: 'Practice Modules', type: 'Hands-on Learning' },
                { name: 'Online Courses', type: 'E-learning' },
                { name: 'Research Papers', type: 'Academic Resource' },
                { name: 'Field Guides', type: 'Plant Identification' },
                { name: 'Experiment Kits', type: 'Hands-on Learning' },
                { name: 'Project Templates', type: 'Planning Aid' },
                { name: 'Presentation Tools', type: 'Project Sharing' },
                { name: 'Learning Apps', type: 'Digital Education' }
            ],
            'Digital Devices': [
                { name: 'Tablet Device', type: 'Learning Tool' },
                { name: 'Soil Tester', type: 'Analysis Kit' },
                { name: 'Weather Monitor', type: 'Environment Study' },
                { name: 'Camera', type: 'Documentation Tool' },
                { name: 'Laptop', type: 'Research Aid' },
                { name: 'Smartphone', type: 'Communication Device' },
                { name: 'Digital Scale', type: 'Measurement Tool' },
                { name: 'GPS Device', type: 'Location Tracking' },
                { name: 'Data Logger', type: 'Recording Device' },
                { name: 'Presentation Software', type: 'Project Sharing' }
            ],
            'School Garden Tools': [
                { name: 'Mini Rake', type: 'Soil Preparation' },
                { name: 'Hand Trowel', type: 'Planting Tool' },
                { name: 'Garden Gloves', type: 'Protection Gear' },
                { name: 'Compost Bin', type: 'Sustainability Kit' },
                { name: 'Plant Labels', type: 'Identification Tool' },
                { name: 'Small Greenhouse', type: 'Climate Control' }
            ],
            'Research Equipment': [
                { name: 'Microscope', type: 'Observation Tool' },
                { name: 'Lab Notebook', type: 'Documentation Tool' },
                { name: 'Measuring Cylinders', type: 'Science Kit' },
                { name: 'Sample Containers', type: 'Specimen Collection' },
                { name: 'Test Kits', type: 'Analysis Tools' },
                { name: 'Data Recording Sheet', type: 'Tracking Aid' }
            ],
            'Documentation Kit': [
                { name: 'Digital Camera', type: 'Visual Documentation' },
                { name: 'Notebook & Pens', type: 'Manual Recording' },
                { name: 'Audio Recorder', type: 'Voice Notes' },
                { name: 'Tripod Stand', type: 'Camera Accessory' },
                { name: 'Portable Scanner', type: 'Document Archiving' },
                { name: 'Storage Drive', type: 'Data Backup' }
            ],
            'Learning Materials': [
                { name: 'Posters and Charts', type: 'Visual Aid' },
                { name: 'Flash Cards', type: 'Interactive Learning' },
                { name: 'Worksheets', type: 'Practice Material' },
                { name: 'Storybooks', type: 'Reading Material' },
                { name: 'Activity Books', type: 'Hands-on Engagement' },
                { name: 'CD/DVD Educational Media', type: 'Supplemental Learning' }
            ]
        },
        schedule_options: [
            'Weekend Program',
            'Summer Training',
            'After School Hours'
        ]
    }
};
