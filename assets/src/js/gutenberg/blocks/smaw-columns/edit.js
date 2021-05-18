import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, SelectControl, RangeControl} from '@wordpress/components';
import {useDispatch, useSelect} from '@wordpress/data';
import {createBlock} from '@wordpress/blocks';
import {times} from 'lodash';


const Edit = ({clientId, attributes, setAttributes} ) => {

    const {
        responsiveTrigger,
        innerBlocksTemplate,
        wrapper,
        col_num
    } = attributes;

    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    let { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

    function onChangeResponsiveTrigger(newValue){

        let new_inner_blocks = [
            createBlock("core/columns", {className: `d-flex ${newValue} ${wrapper}`}, inner_blocks[0].innerBlocks)
        ];

        setAttributes({responsiveTrigger: newValue});
        replaceInnerBlocks(clientId, new_inner_blocks, false);

    }

    function onChangeWrapper(newValue){

        let new_inner_blocks = [
            createBlock("core/columns", {className: `d-flex ${responsiveTrigger} ${newValue}`}, inner_blocks[0].innerBlocks)
        ];

        setAttributes({wrapper: newValue});
        replaceInnerBlocks(clientId, new_inner_blocks, false);
    }

    function onChangeColNum(newValue){

        let new_inner_blocks;

        if(newValue < col_num){
            new_inner_blocks = [
                createBlock("core/columns", {className: `d-flex ${responsiveTrigger} ${wrapper}`}, (inner_blocks[0].innerBlocks).slice(0,newValue))
            ];
        } else{
            let cols = [
                ...(inner_blocks[0].innerBlocks),
                ...times(newValue-col_num, () => 
                    createBlock('smaw-blocks/smaw-column')
                )
            ]

            new_inner_blocks = [
                createBlock("core/columns", {className: `d-flex ${responsiveTrigger} ${wrapper}`}, cols)
            ];

        }
        
       

        setAttributes({col_num: newValue});
        replaceInnerBlocks(clientId, new_inner_blocks, false);
    }
        
    return ([
        <InspectorControls>

            <PanelBody> 
                <SelectControl
                    label={ 'Responsive Column Control:' }
                    value={ responsiveTrigger }
                    onChange={  onChangeResponsiveTrigger }
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
            </PanelBody>

            <PanelBody> 
                <SelectControl
                    label={ 'Wrapper Column Property:' }
                    value={ wrapper }
                    onChange={  onChangeWrapper }
                    options={ [
                        { value: null, label: 'Select wrapper', disabled: true },
                        { value: '', label: 'none' },
                        { value: 'flex-wrap', label: 'wrap' },
                        { value: 'flex-nowrap', label: 'nowrap' },
                    ] }
                />
            </PanelBody>

            <PanelBody>
                <RangeControl
                    label="Columns"
                    value={ col_num }
                    onChange={ onChangeColNum }
                    min={ 1 }
                    max={ 10 }
                    initialPosition={ 2 }
                />
            </PanelBody>


        </InspectorControls>,

        <InnerBlocks
            template={ innerBlocksTemplate }
        />
    ]);

}


export default Edit;