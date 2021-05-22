import { addFilter } from '@wordpress/hooks';
import { __} from '@wordpress/i18n';
import {assign} from 'lodash';

const targetBlocks = [
    'core/columns',
];

const addAttributes = (settings, name)  => {

    if ( ! targetBlocks.includes( name ) ) {
        return settings;
    }

    settings.attributes = assign( settings.attributes, 
        {wrapper:{ type: 'string', default: '' }},
        {responsiveTrigger:{type: 'string', default: ''}},
        {rowReverse: {type:'boolean', default: false}},
        {colReverse: {type:'boolean', default: false}},
    );

    return settings;

}

addFilter( 'blocks.registerBlockType', 'smaw-blocks/columns-extensions/add-attributes', addAttributes );



import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';




const addEditBlocksControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! targetBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { 
            wrapper, 
            responsiveTrigger ,
            rowReverse,
            colReverse
        } = props.attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Custom Controls' ) }
                        initialOpen={ true }
                    >
                        <SelectControl
                            label={ 'Responsive Column Control:' }
                            value={ responsiveTrigger }
                            onChange={ (newValue) => props.setAttributes({responsiveTrigger: newValue}) }
                            options={ [
                                { value: null, label: 'Select size', disabled: true },
                                { value: '', label: 'none' },
                                { value: 'col-sm-responsive', label: 'sm' },
                                { value: 'col-md-responsive', label: 'md' },
                                { value: 'col-lg-responsive', label: 'lg' },
                                { value: 'col-xl-responsive', label: 'xl' },
                                { value: 'col-xxl-responsive', label: 'xxl' },
                            ] }
                        />
                        <SelectControl
                            label={ 'Wrapper Column Property:' }
                            value={ wrapper }
                            onChange={ (newValue) => props.setAttributes({wrapper: newValue}) }
                            options={ [
                                { value: null, label: 'Select wrapper', disabled: true },
                                { value: '', label: 'none' },
                                { value: 'flex-wrap', label: 'wrap' },
                                { value: 'flex-nowrap', label: 'nowrap' },
                            ] }
                        />
                        <ToggleControl
                            label="row reverse"
                            checked={ rowReverse }
                            onChange={ () => props.setAttributes({rowReverse: !rowReverse}) }
                        />
                         <ToggleControl
                            label="col reverse"
                            checked={ colReverse }
                            onChange={ () => props.setAttributes({colReverse: !colReverse}) }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>

        );
    };
}, 'addEditBlocksControl' );

addFilter( 'editor.BlockEdit', 'smaw-blocks/columns-extensions/block-edit', addEditBlocksControl );


const withStyles = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
        if ( ! targetBlocks.includes( props.name ) ) {
            return <BlockListBlock {...props}/>;
        }

        const { 
            wrapper, 
            responsiveTrigger ,
            rowReverse,
            colReverse
        } = props.attributes;

		let wrapperProps = props.wrapperProps;
		wrapperProps = {
            className: `d-flex ${wrapper} ${responsiveTrigger+''+(colReverse? '-reverse':'')} ${rowReverse ? 'row-reverse' : ''} `,
		}; 

		return <BlockListBlock { ...props } {...wrapperProps}/>;
	};
}, 'withStyles' );

addFilter( 'editor.BlockListBlock', `smaw-blocks/columns-extensions/editor-wrapper`, withStyles );



const addExtraProps = ( saveElementProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! targetBlocks.includes( blockType.name ) ) {
        return saveElementProps;
    }


    const { 
        wrapper, 
        responsiveTrigger ,
        rowReverse,
        colReverse
    } = attributes;


    // Use Lodash's assign to gracefully handle if attributes are undefined
    assign( saveElementProps, { className: saveElementProps.className+` d-flex ${wrapper} ${responsiveTrigger+''+(colReverse? '-reverse':'')} ${rowReverse ? 'row-reverse' : ''} ` }  );

    return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'smaw-blocks/columns-extensions/save', addExtraProps );