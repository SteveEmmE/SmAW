import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';





registerBlockType('smaw-blocks/smaw-column', {

    title: 'Smaw Column',
    description: __('Custom Column', 'smaw'),
    icon: 'columns',
    category: 'smaw-blocks',

    attributes:{
        width: { type:'number', default: 50 },
        responsiveTriggers:{
            type: 'object', 
            default: {
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
                xxl: 0
            }
        },
        innerBlocksTemplate: {
            type: 'array', 
            default: [
                [
                    'core/column',
                    {className: 'flex-basis-0'},
                    []
                ],
            ]
        }
    },

    edit: Edit,    
    save: Save
})