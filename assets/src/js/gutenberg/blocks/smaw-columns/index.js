import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';





registerBlockType('smaw-blocks/smaw-columns', {

    title: 'Smaw Columns',
    description: __('Custom Columns', 'smaw'),
    icon: 'columns',
    category: 'smaw-blocks',

    attributes:{
        responsiveTrigger:{type: 'string', default: ''},
        wrapper:{ type: 'string', default: '' },
        col_num: { type: 'number', default: 2 }, 
        innerBlocksTemplate: {
            type: 'array', 
            default: [
                [
                    'core/columns',
                    {   
                        className:'d-flex '
                    },
                    [
                        ['smaw-blocks/smaw-column',{},[]],
                        ['smaw-blocks/smaw-column',{},[]]
                    ]
                ],
            ]
        }
    },

    edit: Edit,    
    save: Save
})