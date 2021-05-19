import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, SelectControl, RangeControl} from '@wordpress/components';
import {useDispatch, useSelect} from '@wordpress/data';
import {createBlock} from '@wordpress/blocks';



const Edit = ({clientId, attributes, setAttributes} ) => {

    const {
        width,
        responsiveTriggers,
        innerBlocksTemplate,
    } = attributes;

    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    let { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

    let onChangeFlexBasis = {};
    for (const [key, value] of Object.entries(responsiveTriggers)) {
        onChangeFlexBasis[key] = function(newValue){
            console.log(key);
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
        let classes;
        if(responsiveValue && newSize != null)
            classes = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${newSize==size ? generateFlexBasisClass(newSize, newValue) : generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, width))
        else
            classes = Object.keys(responsiveTriggers).reduce((res, size) =>  `${res} ${generateFlexBasisClass(size, responsiveTriggers[size])}`, generateFlexBasisClass(null, newValue))
        console.log(classes);
        let new_inner_blocks = [
            createBlock("core/column", {className: classes}, inner_blocks[0].innerBlocks)
        ];
        console.log(new_inner_blocks)
        replaceInnerBlocks(clientId, new_inner_blocks, false);
    }


    console.log(responsiveTriggers.sm);
     
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

        <InnerBlocks
            template={ innerBlocksTemplate }
        />
    ]
   

}


export default Edit;