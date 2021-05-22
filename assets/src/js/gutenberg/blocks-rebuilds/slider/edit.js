import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';
import {Button, PanelBody, SelectControl, TextControl, __experimentalNumberControl as NumberControl} from '@wordpress/components';
import get from 'lodash/get';
import { __ } from '@wordpress/i18n';


const Edit = ({attributes, setAttributes, toggleSelection}) => {


    let{
        mediaUrls,
        mediaAlt,
        legalSizes,
        size,
        breakPoints,
        newBreakpointLabel,
        newBreakpointValue,
    } = attributes;

    function onImagesChange(media){
        let tmpMediaUrls = [];
        let tmpMediaAlt = [];
        let tmpLegalSizes = [];
        media.forEach((m, i) => {
            let sizes = get(m, ['sizes']  || get(m,['media_details', 'sizes']));
            if(i == 0) tmpLegalSizes = Object.keys(sizes);
            else tmpLegalSizes = tmpLegalSizes.filter(s => Object.keys(sizes).includes(s))
            //let src = get( m, [ 'sizes', 'full', 'url' ] ) || get( m, [ 'media_details', 'sizes', 'full', 'source_url' ] );
            tmpMediaUrls.push(sizes);
            tmpMediaAlt.push(m.alt);
        })
        
        setAttributes({mediaUrls: tmpMediaUrls});
        setAttributes({legalSizes: tmpLegalSizes});
        setAttributes({mediaAlt: tmpMediaAlt});

    }

    function onChangeSize(newSize){
        setAttributes({size: newSize})
    }

    function addNewBreakPoint(){
        let newBrekpoint = [...breakPoints]
        if(newBreakpointLabel && newBreakpointValue){
            newBrekpoint.push({label: newBreakpointLabel, value: newBreakpointValue, itemsNumber: 1});
            setAttributes({breakPoints: newBrekpoint});
            setAttributes({newBreakpointLabel: ''});
            setAttributes({newBreakpointValue: 0});
        }
    }
    let setItemsNumber = [];
    breakPoints.forEach((bp,i) => {
        setItemsNumber.push(function(newItemNumber){
            let tmp = [...breakPoints];
            tmp[i].itemsNumber = newItemNumber;
            setAttributes({breakPoints: tmp});
        })
    })
    let removeBreakpoint = [];
    breakPoints.forEach((bp,i) => {
        removeBreakpoint.push(function(){
            let tmp = [...breakPoints];
            tmp.splice(i,1);
            setAttributes({breakPoints: tmp});
        })
    })

    return ([
        <InspectorControls style={{marginBottom: '40px'}}>
 
            <PanelBody title={'Images Upload'}>
                <MediaPlaceholder
                    icon="format-image"
                    labels={{
                        title: 'Media area',
                    }}
                    className="block-image image"
                    onSelect={onImagesChange}
                    accept="image/*"
                    allowedTypes={['image']}
                    multiple='true'
                />   
                
            </PanelBody >

            <PanelBody title={'Images Size'}>
                <SelectControl
                    label={ 'Select the size for the items:' }
                    value={ size } // e.g: value = [ 'a', 'c' ]
                    onChange={  onChangeSize }
                    options={  [{value: null, label: 'Select a size', disabled: true },
                            ...legalSizes.map(s => {return {value: s, label: s}})
                    ]}
                />
            </PanelBody>
            <PanelBody title={'Add breakpoints'}>
                <TextControl
                    label="Label for new breakpoint"
                    value={newBreakpointLabel }
                    onChange={ newValue => setAttributes({newBreakpointLabel: newValue})}
                />
                <NumberControl
                    label="Px for the new breakpoint"
                    isShiftStepEnabled={ true }
                    onChange={ newValue => setAttributes({newBreakpointValue: newValue}) }
                    shiftStep={ 1 }
                    min = {1}
                    value={newBreakpointValue}
                />
                <Button isSecondary 
                    onClick={addNewBreakPoint}
                >Add</Button>
            </PanelBody>
            <PanelBody title={'Responsive Breakpoints'}>
                {
                    breakPoints.map((bp, i) => {
                        return([
                            <NumberControl
                                label={`${bp.label} - ${bp.value}px`}
                                isShiftStepEnabled={ true }
                                onChange={ setItemsNumber[i] }
                                shiftStep={ 1 }
                                max={mediaUrls.length}
                                min={1}
                                value={ bp.itemsNumber || 0 }
                            />,
                            <Button isSecondary 
                                onClick={removeBreakpoint[i]}
                            >Remove</Button>
                        ])
                    })
                }
            </PanelBody>
           
        </InspectorControls>,
        <ul
            className='d-flex flex-center'
        >
            {
                mediaUrls.map((url, i) => 
                    <li style={{
                        listStyle: 'none'
                    }}>
                        <img src={url[size]['url'] || url[size]['source_url']} alt=""/>
                    </li>
                )
            }
        </ul>
    ])

}

export default Edit;

