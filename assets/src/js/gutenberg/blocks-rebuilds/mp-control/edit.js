import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody} from '@wordpress/components';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';


const Edit = ({attributes, setAttributes}) => {
        
    const{
        margin,
        padding
    } = attributes;

    function onChangeMargin(newMargin){ setAttributes({margin: newMargin});}
    function onChangePadding(newPadding){ setAttributes({padding: newPadding});}
    
    return ([

        <InspectorControls style={{marginBottom:'10px'}}>
            <PanelBody title="Margin Control">
                <BoxControl
                    values={ margin }
                    onChange={ onChangeMargin}
                />
            </PanelBody>
            <PanelBody title="Padding Control">
                <BoxControl
                    values={ padding}
                    onChange={ onChangePadding}
                />
            </PanelBody>
          
        </InspectorControls>,

        
        <div 

            style={{
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
                paddingRight: padding.right,
                marginTop: margin.top,
                marginBottom: margin.bottom,
                marginLeft: margin.left,
                marginRight: margin.right,
            }}
        >
            <InnerBlocks/>
        </div>       
    ])
}


export default Edit;