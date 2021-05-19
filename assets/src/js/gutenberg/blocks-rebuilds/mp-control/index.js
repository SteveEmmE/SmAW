import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';





registerBlockType('smaw-blocks/mp-control', {

    title: 'Smaw MP Control',
    description: __('Margin Padding Controller', 'smaw'),
    icon: 'editor-expand',
    category: 'smaw-blocks',

    attributes:{
        margin:{type: 'object',
            default: {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
            }
        },
        padding:{type: 'object',
            default: {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
            }
        }
    },

    edit: Edit,    
    save: Save
})