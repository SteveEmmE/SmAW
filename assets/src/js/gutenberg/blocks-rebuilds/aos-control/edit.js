import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, RangeControl, SelectControl, ToggleControl} from '@wordpress/components';


const Edit = ({attributes, setAttributes}) => {

    const{
        fade,
        flip,
        slide,
        zoom,
        offset,
        delay,
        duration,
        easing,
        anchorPlacement,
        once
    } = attributes;


    let onChangeFade = (newValue) => setAttributes({fade: newValue});
    let onChangeFlip = (newValue) => setAttributes({flip: newValue});
    let onChangeSlide = (newValue) => setAttributes({slide: newValue});
    let onChangeZoom = (newValue) => setAttributes({zoom: newValue});
    let onChangeAnchorPlacement = (newValue) => setAttributes({anchorPlacement: newValue});

    let onChangeEasing = (newValue) => setAttributes({easing: newValue});

    let onChangeOffset = (newValue) => setAttributes({offset: newValue});
    let onChangeDelay = (newValue) => setAttributes({delay: newValue});
    let onChangeDuration = (newValue) => setAttributes({duration: newValue});

    let onChangeOnce = (newValue) => setAttributes({once: newValue});




    return ([
        <InspectorControls style={{marginBottom: '40px'}}>


            <PanelBody title="Fade Animation">
                <SelectControl
                    label={ 'Select fade direction:' }
                    value={ fade }
                    onChange={  onChangeFade }
                    options={ [
                        { value: '', label: 'none'},
                        { value: 'fade-up', label: 'up' },
                        { value: 'fade-down', label: 'down' },
                        { value: 'fade-left', label: 'left' },
                        { value: 'fade-right', label: 'right' },
                        { value: 'fade-up-right', label: 'up-right' },
                        { value: 'fade-up-left', label: 'up-left' },
                        { value: 'fade-down-right', label: 'down-right' },
                        { value: 'fade-down-left', label: 'down-left' }
                    ] }
                />
            </PanelBody>

            <PanelBody title="Flip Animation">
                <SelectControl
                    label={ 'Select flip direction:' }
                    value={ flip }
                    onChange={  onChangeFlip }
                    options={ [
                        { value: '', label: 'none'},
                        { value: 'flip-up', label: 'up' },
                        { value: 'flip-down', label: 'down' },
                        { value: 'flip-left', label: 'left' },
                        { value: 'flip-right', label: 'right' },
                    ] }
                />
            </PanelBody>

            <PanelBody title="Slide Animation">
                <SelectControl
                    label={ 'Select slide direction:' }
                    value={ slide }
                    onChange={  onChangeSlide }
                    options={ [
                        { value: '', label: 'none'},
                        { value: 'slide-up', label: 'up' },
                        { value: 'slide-down', label: 'down' },
                        { value: 'slide-left', label: 'left' },
                        { value: 'slide-right', label: 'right' },
                    ] }
                />
            </PanelBody>

            <PanelBody title="Zoom Animation">
                <SelectControl
                    label={ 'Select zoom direction:' }
                    value={ zoom }
                    onChange={  onChangeZoom }
                    options={ [
                        { value: '', label: 'none'},
                        { value: 'zoom-in', label: 'in'},
                        { value: 'zoom-in-up', label: 'in-up' },
                        { value: 'zoom-in-down', label: 'in-down' },
                        { value: 'zoom-in-left', label: 'in-left' },
                        { value: 'zoom-in-right', label: 'in-right' },
                        { value: 'zoom-out', label: 'out'},
                        { value: 'zoom-out-up', label: 'out-up' },
                        { value: 'zoom-out-down', label: 'out-down' },
                        { value: 'zoom-out-left', label: 'out-left' },
                        { value: 'zoom-out-right', label: 'out-right' },
                    ] }
                />
            </PanelBody>

            <PanelBody title="Anchor Placement">
                <SelectControl
                    label={ 'Defines which position of the element regarding to window should trigger the animation (element-window):' }
                    value={ anchorPlacement }
                    onChange={  onChangeAnchorPlacement }
                    options={ [
                        { value: 'top-bottom', label: 'top-bottom'},
                        { value: 'top-center', label: 'top-center'},
                        { value: 'top-top', label: 'top-top'},
                        { value: 'center-bottom', label: 'center-bottom'},
                        { value: 'center-center', label: 'center-center'},
                        { value: 'center-top', label: 'center-top'},
                        { value: 'bottom-bottom', label: 'bottom-bottom'},
                        { value: 'bottom-center', label: 'bottom-center'},
                        { value: 'bottom-top', label: 'bottom-top'},
                    ] }
                />
            </PanelBody>

            <PanelBody title="Easing">
                <SelectControl
                    label={ 'Select the option:' }
                    value={ easing }
                    onChange={  onChangeEasing }
                    options={ [
                        { value: 'ease', label: 'ease'},
                        { value: 'linear', label:'linear'},
                        { value: 'ease-in', label: 'ease-in'},
                        { value: 'ease-out', label: 'ease-out'},
                        { value: 'ease-in-out', label: 'ease-in-out'},
                        { value: 'ease-in-back', label: 'ease-in-back'},
                        { value: 'ease-out-back', label: 'ease-out-back'},
                        { value: 'ease-in-out-back', label: 'ease-in-out-back'},
                        { value: 'ease-in-sine', label: 'ease-in-sine'},
                        { value: 'ease-out-sine', label: 'ease-out-sine'},
                        { value: 'ease-in-out-sine', label: 'ease-in-out-sine'},
                        { value: 'ease-in-quad', label: 'ease-in-quad'},
                        { value: 'ease-out-quad', label: 'ease-out-quad'},
                        { value: 'ease-in-out-quad', label: 'ease-in-out-quad'},
                        { value: 'ease-in-cubic', label: 'ease-in-cubic'},
                        { value: 'ease-out-cubic', label: 'ease-out-cubic'},
                        { value: 'ease-in-out-cubic', label: 'ease-in-out-cubic'},
                        { value: 'ease-in-quart', label: 'ease-in-quart'},
                        { value: 'ease-out-quart', label: 'ease-out-quart'},
                        { value: 'ease-in-out-quart', label: 'ease-in-out-quart'}
                    ] }
                />
            </PanelBody>

            <PanelBody title="Offset">
                <RangeControl
                    label="Offset (in px) from the original trigger point"
                    value={offset}
                    onChange={onChangeOffset}
                    step={50}
                    min={ 0 }
                    max={ 4000 }
                    initialPosition={150}
                />
            </PanelBody>

            <PanelBody title="Delay">
                <RangeControl
                    label="Values from 0 to 3000, with step 50ms"
                    value={delay}
                    onChange={onChangeDelay}
                    step={50}
                    min={ 0 }
                    max={ 4000 }
                    initialPosition={0}
                />
            </PanelBody>

            <PanelBody title="Duration">
                <RangeControl
                    label="Values from 0 to 3000, with step 50ms"
                    value={duration}
                    onChange={onChangeDuration}
                    step={50}
                    min={ 0}
                    max={ 4000 }
                    initialPosition={400}
                />
            </PanelBody>

            <PanelBody>
                <ToggleControl
                    label="Whether animation should happen only once - while scrolling down"
                    help={
                        once
                            ? 'only while scrolling down'
                            : 'every time the trigger has reached'
                    }
                    checked={ once }
                    onChange={ onChangeOnce }
                />
            </PanelBody>
            

        </InspectorControls>,

        <div
        >
            <InnerBlocks/>
        </div>
 
      
       
       
    ])

}

export default Edit;