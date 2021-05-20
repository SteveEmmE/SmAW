import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, SelectControl, RangeControl} from '@wordpress/components';
import {useDispatch, useSelect} from '@wordpress/data';
import {createBlock} from '@wordpress/blocks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useBlockProps } from '@wordpress/block-editor';



const Edit = ({attributes, setAttributes, clientId}) => {



    const {
        width,
        responsiveTriggers,
        innerBlocksTemplate,
        classes
    } = attributes;

    let blockProps = useBlockProps( {
        className: classes,
    } );



    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    let { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

    let onChangeFlexBasis = {};
    for (const [key, value] of Object.entries(responsiveTriggers)) {
        onChangeFlexBasis[key] = function(newValue){
            let tmpResponsiveTriggers = JSON.parse(JSON.stringify(responsiveTriggers));
            tmpResponsiveTriggers[key] = newValue;
            updateInnerBlock(key, newValue, true);
            setAttributes({responsiveTriggers: tmpResponsiveTriggers});
        }
    }

    function onChangeWidth(newValue){
        updateInnerBlock(null, newValue, false);
        setAttributes({width: newValue});
    }

    function generateFlexBasisClass(size, value){
        if(size == null) return 'flex-basis-'+value;
        return 'flex-basis-'+size+'-'+value;
    }

    function updateInnerBlock(newSize, newValue, responsiveValue){
        let tmpClasses;
        if(responsiveValue && newSize != null)
            tmpClasses = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${newSize==size ? generateFlexBasisClass(newSize, newValue) : generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, width))
        else
            tmpClasses = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, newValue))
        let new_inner_blocks = [
            createBlock("core/column", {className: tmpClasses}, inner_blocks[0].innerBlocks)
        ];

        replaceInnerBlocks(clientId, new_inner_blocks, false);
        setAttributes({classes: tmpClasses});
    }

     
    return [
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
            
        </InspectorControls>,

        <div {...blockProps}>
            <InnerBlocks
                template={ innerBlocksTemplate }
            />
        </div>
        
       
    ]
   

}


export default Edit;