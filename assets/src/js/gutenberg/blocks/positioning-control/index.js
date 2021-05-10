import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/positioning-control', {

    title: 'Smaw Positioning Control',
    description: __('Relative/Absolute Position Control', 'smaw'),
    icon: 'move',
    category: 'smaw-blocks',

    attributes: {
        position:{type: 'string', default: 'relative'},
        displacement:{
            type: 'object',
            default: {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
            }
        },
    },

    edit: Edit,    
    save: Save
})