import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';





registerBlockType('smaw-blocks/image-with-desc', {

    title: 'Image With Description',
    description: __('Image Width Description', 'smaw'),
    icon: 'align-pull-left',
    category: 'smaw-blocks',

    attributes:{
        id:{type:'string', default:''},
        images:{type: 'array', default: []},
        imageWidth:{type: 'string', default: ''},
        imageWidthSave:{type: 'string', default: '50%'},
        imageHeight:{type: 'string', default: '500'},
        rowDirection:{type: 'boolean', default: 'false'},
        responsiveReverse:{type: 'boolean', default: false},
        innerBlockWidth:{type: 'string', default: ''}
    },

    edit: Edit,    
    save: Save
})