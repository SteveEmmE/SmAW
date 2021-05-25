import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Save from "./save";
import Edit from "./edit";


registerBlockType('smaw-blocks/form',{

    title: 'Smaw Form',
    description: __('Form with custom properties', 'smaw'),
    icon: 'welcome-write-blog',
    category: 'smaw-blocks',

    attributes:{
        alignment:{
            type: 'array',
            default: ['','']
        },
        linkText:{
            type: 'string',
            default: 'none'
        },
        privacyPolicyText:{
            type: 'string',
            default: ''
        }
    },

    edit: Edit,
    save: Save

})