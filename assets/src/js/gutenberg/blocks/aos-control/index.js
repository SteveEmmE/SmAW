import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/aos-control', {

    title: 'Smaw AOS Control',
    description: __('Controller for AOS - Animation On Scroll', 'smaw'),
    icon: 'controls-play',
    category: 'smaw-blocks',

    attributes: {
        aosActive:{type: 'boolean', default: false},

        fade:{type: 'string', default: ''},
        flip:{type: 'string', default: ''},
        slide:{type: 'string', default: ''},
        zoom:{type: 'string', default: ''},

        offset:{type: 'number', default: 150},
        delay:{type: 'number', default: 0},
        duration:{type: 'number', default: 400},
        easing:{type: 'string', default: 'ease'},

        anchorPlacement:{type: 'string', default: 'top-bottom'},

        once:{type: 'boolean', default:false}

    },

    edit: Edit,    
    save: Save
})