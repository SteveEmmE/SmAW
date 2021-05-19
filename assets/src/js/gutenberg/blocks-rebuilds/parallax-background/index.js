import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';



registerBlockType('smaw-blocks/parallax-background', {

    title: 'Smaw Parallax Background',
    description: __('Parallax Background Image', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    attributes: {
        imageSrc:{ type: 'string', default: '' },
        imageZoom:{type: 'number', default: 0},
        centering:{type: 'boolean', default: true},
        speed:{ type: 'number', default: 0.2 },
        speedXs:{ type: 'number', default: 0},
        speedMobile: { type: 'number', default: 0},
        speedTablet: { type: 'number', default: 0},
        speedDesktop: { type: 'number', default: 0},
        zIndex:{ type: 'number', default: 0 },
        sectionHeight: {type: 'number', default: 400},
        sectionWidth: {type: 'number', default: 100},
        positionX:{type: 'number', default: 0},
        positionY:{type: 'number', default: 0}
    },

    edit: Edit,    
    save: Save
})