import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/background', {

    title: 'Smaw Background',
    description: __('Background image', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',


    attributes:{
        imgUrl:{type: 'string', default: ''},
        filterActive: { type: 'boolean', default: false },
        filterColor: {  type: 'string', default: ''},
        backgroundColor:{type: 'string', default: ''},
        focalPoints: {
            type: 'object',
            default: {
                x: 0.5,
                y: 0.5
            }
        },
        repeat:{type: 'boolean', default: false},
        sizeX: {type: 'number', default: '100'},
        sizeY: {type: 'number', default: '0'}
    },

    edit: Edit,    
    save: Save
})