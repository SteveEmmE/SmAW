import {InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl, RangeControl, SelectControl} from '@wordpress/components'

const Edit = ({attributes, setAttributes}) => {

    const{
        maxWidthActive,
        maxWidth,
        maxHeightActive,
        maxHeight,
        minWidthActive,
        minWidth,
        minHeightActive,
        minHeight,
        sectionAlignment,
    } = attributes;


    function onChangeMaxWidthActive(){ setAttributes({maxWidthActive: !maxWidthActive}) }
    function onChangeMaxHeightActive(){ setAttributes({maxHeightActive: !maxHeightActive}) }
    function onChangeMinWidthActive(){ setAttributes({minWidthActive: !minWidthActive}) }
    function onChangeMinHeightActive(){ setAttributes({minHeightActive: !minHeightActive}) }

    function onChangeMaxWidth(newValue) { setAttributes({maxWidth: newValue})}
    function onChangeMaxHeight(newValue) { setAttributes({maxHeight: newValue})}
    function onChangeMinWidth(newValue) { setAttributes({minWidth: newValue})}
    function onChangeMinHeight(newValue) { setAttributes({minHeight: newValue})}


    function onChangeSectionAlignment(newAlignment){
        setAttributes({ sectionAlignment: newAlignment})
    }



    return ([
        <InspectorControls style={{marginBottom: '40px'}}>

            <PanelBody> 
                <ToggleControl
                    label="Max Width"
                    help={ maxWidthActive ? 'Active' : 'Deactive' }
                    checked={ maxWidthActive }
                    onChange={ onChangeMaxWidthActive }
                />
                {
                    maxWidthActive? 
                        <RangeControl
                            label="Max Width Value"
                            value={maxWidth}
                            onChange={onChangeMaxWidth}
                            min={ 0 }
                            max={ 2000 }
                        />
                    :
                    ''
                }
            </PanelBody>

            <PanelBody> 
                <ToggleControl
                    label="Max Height"
                    help={ maxHeightActive ? 'Active' : 'Deactive' }
                    checked={ maxHeightActive }
                    onChange={ onChangeMaxHeightActive }
                />
                  {
                    maxHeightActive? 
                        <RangeControl
                            label="Max Height Value"
                            value={maxHeight}
                            onChange={onChangeMaxHeight}
                            min={ 0 }
                            max={ 2000 }
                        />
                    :
                    ''
                }
            </PanelBody>

            <PanelBody> 
                <ToggleControl
                    label="Min Width"
                    help={ minWidthActive ? 'Active' : 'Deactive' }
                    checked={ minWidthActive }
                    onChange={ onChangeMinWidthActive }
                />
                  {
                    minWidthActive? 
                        <RangeControl
                            label="Min Width Value"
                            value={minWidth}
                            onChange={onChangeMinWidth}
                            min={ 0 }
                            max={ 2000 }
                        />
                    :
                    ''
                }
            </PanelBody>

            <PanelBody> 
                <ToggleControl
                    label="Min Height"
                    help={ minHeightActive ? 'Active' : 'Deactive' }
                    checked={ minHeightActive }
                    onChange={ onChangeMinHeightActive }
                />
                  {
                    minHeightActive? 
                        <RangeControl
                            label="Min Height Value"
                            value={minHeight}
                            onChange={onChangeMinHeight}
                            min={ 0 }
                            max={ 2000 }
                        />
                    :
                    ''
                }
            </PanelBody>

            <PanelBody title="Alignment">
                <SelectControl
                    value={ sectionAlignment }
                    onChange={  onChangeSectionAlignment }
                    options={ [
                        { value: null, label: 'Select an Alignment', disabled: true },
                        { value: '', label: 'none'},
                        { value: 'mr-a', label: 'left' },
                        { value: 'mx-a', label: 'center' },
                        { value: 'ml-a', label: 'right' }
                    ] }
                />
            </PanelBody>

        </InspectorControls>,

        <div
            className= {sectionAlignment + " sizes-control"} 
            style={{
                maxWidth: maxWidthActive? maxWidth : 'none',
                maxHeight: maxHeightActive? maxHeight : 'none',
                minWidth: minWidthActive? minWidth : 'none',
                minHeight: minHeightActive? minHeight : 'none',
            }}
        >
            <InnerBlocks/>
        </div>
      
       
       
    ])
}

export default Edit;