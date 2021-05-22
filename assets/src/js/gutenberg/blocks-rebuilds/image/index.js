import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/custom-image', {

    title: 'Smaw Image',
    description: __('Image with custom properties', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    attributes: {
        imagesSrc:{type: 'array', default: []},
        allowedSizes:{
            type: 'array',
            default: []
        },
        size:{
            type: 'string',
            default: 'full'
        },
        imagesHeight:{type: 'string', default: '500px'},
        imagesWidthOverflow:{ type:'string', default: ''},
        imagesWidth:{ type:'array', default: []},
        gallery:{type:'array', default:[]}
    },

    edit: Edit,    
    save: Save
})