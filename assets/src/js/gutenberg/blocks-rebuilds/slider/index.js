import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';




export default registerBlockType('smaw-block/slider', {

    title: 'Smaw Slider',
    description: __('Slider for images', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    attributes: {
        mediaUrls:{
            type: 'array',
            default: []
        },
        mediaAlt:{
            type: 'array',
            default: []
        },
        legalSizes:{
            type: 'array',
            default: []
        },
        size:{
            type: 'string',
            default: 'full'
        },
        breakPoints:{
            type:'array',
            default: []
        },
        newBreakpointLabel:{
            type: 'string',
            default: ''
        },
        newBreakpointValue:{
            type: 'number',
            default: 0
        },
    },

    edit: Edit,

    save: Save



});