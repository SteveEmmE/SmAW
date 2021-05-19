import {assign} from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { __} from '@wordpress/i18n';

const enableFontsControlOnBlocks = [
    'core/paragraph',
];


const addFontsAttribute = (settings, name)  => {

    if ( ! enableFontsControlOnBlocks.includes( name ) ) {
        return settings;
    }

    settings.attributes = assign( settings.attributes, {
        spacing: {
            type: 'string',
            default: spacingControlOptions[ 0 ].value,
        },
    } );

    return settings;

}