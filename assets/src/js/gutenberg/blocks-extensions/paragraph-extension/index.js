import {assign, at} from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { __} from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const enableFontsControlOnBlocks = [
    'core/paragraph',
];

const fontOptions = [
    { label: __('none'), value:'' },
    { label: __('thin'), value:'text-thin' },
    { label: __('semibold'), value:'text-semibold' },
    { label: __('bold'), value:'text-bold' },
    { label: __('heavy'), value:'text-heavy' }
]


const addFontsAttribute = (settings, name)  => {

    if ( ! enableFontsControlOnBlocks.includes( name ) ) {
        return settings;
    }

    settings.attributes = assign( settings.attributes, {
        font: {
            type: 'string',
            default: fontOptions[ 0 ].value,
        },
    } );
    settings.apiVersion = 2;


    const newSettings = {
        ...settings,
        attributes:{
            ...settings.attributes,
            font: {
                type: 'string',
                default: fontOptions[ 0 ].value,
            },
        },
        edit(props) {
            const { font } = props.attributes;

            const blockProps = useBlockProps( {
                className: font,
            } );
    
            return ([
                <div {...blockProps}>
                   {settings.edit(props)}
               </div>
            ]);
        }
    }



    return newSettings;

}

addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addFontsAttribute );




/** -------------------------------------------------------------------------------------- */

import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';




const withFontsControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! enableFontsControlOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { font } = props.attributes;


        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'My Fonts Control' ) }
                        initialOpen={ true }
                    >
                        <SelectControl
                            label={ __( 'Font weight' ) }
                            value={ font }
                            options={ fontOptions }
                            onChange={ ( selectedFontOption ) => {
                                props.setAttributes( {
                                    font: selectedFontOption
                                } );
                            } }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>

        );
    };
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withFontsControl );






const addFontExtraProps = ( saveElementProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableFontsControlOnBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }

    const {font} = attributes;

    // Use Lodash's assign to gracefully handle if attributes are undefined
    assign( saveElementProps, { className: font }  );

    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addFontExtraProps );