export const REQUEST_OPTIONS = {
    farmer: {
        fertilizer: {
            label: 'Fertilizer Request',
            types: ['Organic', 'Inorganic', 'Bio-fertilizer']
        },
        crops: {
            label: 'Crops Request',
            types: ['Rice', 'Corn']
        }
    },
    fisherfolk: {
        label: 'Fisherfolk Assistance',
        types: [
            'Habitat Restoration',
            'Weather Information Access',
            'Marketing Assistance'
        ]
    },
    farmworker: {
        label: 'Land Cultivation Equipment',
        types: [
            'Tractor (Corn Field)',
            'Hand Tractor (Rice Field)'
        ]
    }
};

export const REQUEST_STATUS_OPTIONS = ['pending', 'approved', 'rejected'];
