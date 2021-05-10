import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/sizes-control', {

    title: 'Smaw Sizes Control',
    description: __('Max/Min Width Control', 'smaw'),
    icon: 'image-flip-horizontal',
    category: 'smaw-blocks',

    attributes: {
        maxWidthActive:{ type: 'boolean', default: false},
        maxWidth:{ type: 'number', default: 600},
        maxHeightActive:{ type: 'boolean', default: false},
        maxHeight:{ type: 'number', default: 600},
        minWidthActive:{ type: 'boolean', default: false},
        minWidth:{ type: 'number', default: 600},
        minHeightActive:{ type: 'boolean', default: false},
        minHeight:{ type: 'number', default: 600},
        sectionAlignment:{type: 'string', default: ''},
    },

    edit: Edit,    
    save: Save
})