import { addFilter } from '@wordpress/hooks';
import { __} from '@wordpress/i18n';
import {assign} from 'lodash';

const targetBlocks = [
    'core/column',
];

const addAttributes = (settings, name)  => {

    if ( ! targetBlocks.includes( name ) ) {
        return settings;
    }

    settings.attributes = assign( settings.attributes, 
        {width: { type:'number', default: 50 }},
        {classes: { type: 'string', default: '' }},
        {responsiveTriggers:{
            type: 'object', 
            default: {
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
                xxl: 0
            }
        }},
    );

    return settings;

}

addFilter( 'blocks.registerBlockType', 'smaw-blocks/column-extensions/add-attributes', addAttributes );



import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';




const addEditBlocksControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! targetBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const {
            width,
            responsiveTriggers,
        } = props.attributes;

        function generateFlexBasisClass(size, value){
            if(size == null) return 'flex-basis-'+value;
            return 'flex-basis-'+size+'-'+value;
        }

        function generateClasses(newSize, newValue, responsiveValue){
            let tmpClasses;
            if(responsiveValue && newSize != null)
                tmpClasses = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${newSize==size ? generateFlexBasisClass(newSize, newValue) : generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, width))
            else
                tmpClasses = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, newValue))

            props.setAttributes({classes: tmpClasses});
        }

        let onChangeFlexBasis = {};
        for (const [key, value] of Object.entries(responsiveTriggers)) {
            onChangeFlexBasis[key] = function(newValue){
                let tmpResponsiveTriggers = JSON.parse(JSON.stringify(responsiveTriggers));
                tmpResponsiveTriggers[key] = newValue;
                generateClasses(key, newValue, true);
                props.setAttributes({responsiveTriggers: tmpResponsiveTriggers});
            }
        }

        function onChangeWidth(newValue){
            generateClasses(null, newValue, false);
            props.setAttributes({width: newValue});
        }


        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label="Flex-Basis sm"
                            value={ responsiveTriggers.sm }
                            onChange={ onChangeFlexBasis.sm }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                        <RangeControl
                            label="Flex-Basis md"
                            value={ responsiveTriggers.md }
                            onChange={ onChangeFlexBasis.md }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                        <RangeControl
                            label="Flex-Basis lg"
                            value={ responsiveTriggers.lg }
                            onChange={ onChangeFlexBasis.lg }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                        <RangeControl
                            label="Flex-Basis xl"
                            value={ responsiveTriggers.xl }
                            onChange={ onChangeFlexBasis.xl }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                        <RangeControl
                            label="Flex-Basis xxl"
                            value={ responsiveTriggers.xxl }
                            onChange={ onChangeFlexBasis.xxl }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                            <RangeControl
                            label="Flex-Basis"
                            value={ width }
                            onChange={ onChangeWidth }
                            min={ 0 }
                            max={ 100 }
                            step={ 10 }
                            initialPosition={ 0 }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>

        );
    };
}, 'addEditBlocksControl' );

addFilter( 'editor.BlockEdit', 'smaw-blocks/column-extensions/block-edit', addEditBlocksControl );


const withStyles = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
        if ( ! targetBlocks.includes( props.name ) ) {
            return <BlockListBlock {...props}/>;
        }

        let { classes } = props.attributes;

		let wrapperProps = props.wrapperProps;
		wrapperProps = {
            className: classes,
		}; 

		return <BlockListBlock { ...props } {...wrapperProps}/>;
	};
}, 'withStyles' );

addFilter( 'editor.BlockListBlock', `smaw-blocks/column-extensions/editor-wrapper`, withStyles );



const addExtraProps = ( saveElementProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! targetBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }


    const { classes } = attributes;


    // Use Lodash's assign to gracefully handle if attributes are undefined
    saveElementProps = assign( saveElementProps, { className: classes }  );
    saveElementProps = assign( saveElementProps, { style: {} }  );

    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'smaw-blocks/column-extensions/save', addExtraProps );