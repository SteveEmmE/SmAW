import {assign, at} from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { __} from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const enableFontControlOnBlocks = [
    'core/heading',
    'core/paragraph'
];

const fontWeightOptions = [
    { label: __('none'), value:'' },
    { label: __('thin'), value:'text-thin' },
    { label: __('semibold'), value:'text-semibold' },
    { label: __('bold'), value:'text-bold' },
    { label: __('heavy'), value:'text-heavy' }
]


const addFontAttributes = (settings, name)  => {

    if ( ! enableFontControlOnBlocks.includes( name ) ) {
        return settings;
    }

    settings.attributes = assign( settings.attributes, {
        fontWeight: {
            type: 'string',
            default: fontWeightOptions[ 0 ].value,
        },
    } );

    return settings;

}

addFilter( 'blocks.registerBlockType', 'smaw-blocks/font-attributes', addFontAttributes );




/** -------------------------------------------------------------------------------------- */

import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';




const withFontsControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! enableFontControlOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { fontWeight } = props.attributes;


        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Font Controls' ) }
                        initialOpen={ true }
                    >
                        <SelectControl
                            label={ __( 'Font weight' ) }
                            value={ fontWeight }
                            options={ fontWeightOptions }
                            onChange={ ( selectedFontweightOption ) => {
                                props.setAttributes( {
                                    fontWeight: selectedFontweightOption
                                } );
                            } }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>

        );
    };
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'smaw-blocks/with-spacing-control', withFontsControl );


/** --------------------------------------------------------------------------------------------------- */

const withStyles = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
        if ( ! enableFontControlOnBlocks.includes( props.name ) ) {
            return <BlockListBlock {...props}/>;
        }
    
		let wrapperProps = props.wrapperProps;
		wrapperProps = {
            className: props.attributes.fontWeight
		}; 

		return <BlockListBlock { ...props } {...wrapperProps}/>;
	};
}, 'withStyles' );

wp.hooks.addFilter( 'editor.BlockListBlock', `smaw-blocks/core-blocks-font-weight`, withStyles );



const addFontExtraProps = ( saveElementProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableFontControlOnBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }

    const {fontWeight} = attributes;

    // Use Lodash's assign to gracefully handle if attributes are undefined
    assign( saveElementProps, { className: fontWeight }  );

    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'smaw-blocks/get-save-content/extra-props', addFontExtraProps );