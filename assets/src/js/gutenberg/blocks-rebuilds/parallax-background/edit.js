import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, ResizableBox, RangeControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';


const Edit = ({attributes, setAttributes, toggleSelection}) => {

    const{
        imageSrc,
        imageZoom,
        centering,
        positionX,
        positionY,
        speed,
        speedXs,
        speedMobile,
        speedTablet,
        speedDesktop,
        sectionHeight,
        sectionWidth,
        zIndex,
    } = attributes;


    function onChangeImageSrc(media){
        let src = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );
        setAttributes({imageSrc: src});
    }

    function onChangeImageZoom(newZoom){setAttributes({imageZoom: newZoom})}

    function onChangePositionX(newPosition){setAttributes({positionX: newPosition})}
    function onChangePositionY(newPosition){setAttributes({positionY: newPosition})}

    function onChangeSpeed(newSpeed){ setAttributes({speed: newSpeed})}
    function onChangeSpeedXs(newSpeed){ setAttributes({speedXs: newSpeed})}
    function onChangeSpeedMobile(newSpeed){ setAttributes({speedMobile: newSpeed})}
    function onChangeSpeedTablet(newSpeed){ setAttributes({speedTablet: newSpeed})}
    function onChangeSpeedDesktop(newSpeed){ setAttributes({speedDesktop: newSpeed})}
    
    function onChangezIndex(newzIndex) { setAttributes({zIndex: newzIndex})}

    function onChangeCentering() {setAttributes({centering: !centering})}




    return ([

        <InspectorControls style={{marginBottom:'px'}}>
             <PanelBody title={"Select Image"}>
                <MediaPlaceholder
                    key={0}
                    style={{
                        videoWidth: '100%',
                        height: '100%'
                    }}
                    icon="format-image"
                    labels={{
                        title: 'Media area',
                    }}
                    className="block-image image"
                    onSelect={onChangeImageSrc}
                    accept="image/*"
                    allowedTypes={['image']}
                />  
                
            </PanelBody>
            <PanelBody title={'Position'}>
                <RangeControl
                    label={ 'Zoom:' }
                    value={ imageZoom } 
                    onChange={  onChangeImageZoom }
                    min={ 100 }
                    max={ 200 }
                />
                <RangeControl
                    label={ 'Horizontal Position:' }
                    value={ positionX } 
                    onChange={  onChangePositionX }
                    min={ -100 }
                    max={ 100 }
                />
                <RangeControl
                    label={ 'Vertical Position:' }
                    value={ positionY } 
                    onChange={  onChangePositionY }
                    min={ -100 }
                    max={ 100 }
                />
            </PanelBody>
            <PanelBody title="Speed">
                <RangeControl
                    label="speed"
                    value={speed}
                    onChange={onChangeSpeed}
                    min={ -10 }
                    max={ 10 }
                    initialPosition={0.2}
                />
                <RangeControl
                    label="speed xs"
                    value={speedXs}
                    onChange={onChangeSpeedXs}
                    min={ -10 }
                    max={ 10 }
                />
                <RangeControl
                    label="speed mobile"
                    value={speedMobile}
                    onChange={onChangeSpeedMobile}
                    min={ -10 }
                    max={ 10 }
                />
                <RangeControl
                    label="speed tablet"
                    value={speedTablet}
                    onChange={onChangeSpeedTablet}
                    min={ -10 }
                    max={ 10 }
                />
                <RangeControl
                    label="speed desktop"
                    value={speedDesktop}
                    onChange={onChangeSpeedDesktop}
                    min={ -10 }
                    max={ 10 }
                />
            </PanelBody>
            <PanelBody title="z-index">
                <RangeControl
                    label="z-index"
                    value={zIndex}
                    onChange={onChangezIndex}
                    min={ -100 }
                    max={ 100 }
                    initialPosition={0}
                />
            </PanelBody>

            <PanelBody title={"Centering"}>
                <ToggleControl
                    label="centering"
                    help={ centering ? 'Active' : 'Deactive' }
                    checked={centering}
                    onChange={onChangeCentering}
                />
            </PanelBody>
        </InspectorControls>,

        <ResizableBox
            size={ {
                sectionWidth,
                sectionHeight
            } }
            minHeight="50"
            minWidth="50"
            enable={ {
                top: false,
                right: false,
                bottom: true,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }
            onResizeStop={ ( event, direction, elt, delta ) => {
                setAttributes( {
                    sectionHeight: (parseInt( sectionHeight, 10)+delta.height),
                } );
                toggleSelection( true );
            } }
            onResizeStart={ () => {
                toggleSelection( false );
            } }
        >
            <div 
                className="parallax-container"
                style={{
                    height: sectionHeight,

                }}    
            >
                <div 
                    className="rellax"
                    data-rellax-speed={speed}
                    data-rellax-xs-speed={speedXs}
                    data-rellax-mobile-speed={speedMobile}
                    data-rellax-tablet-speed={speedTablet}
                    data-rellax-desktop-speed={speedDesktop}
                    data-rellax-percentage={centering? '0.5': ''}
                    style={{
                        backgroundPositionX:`${positionX}%`,
                        height: `${imageZoom}%`,
                        top: `${positionY}%`,
                        zIndex: zIndex,
                        backgroundImage: `url('${imageSrc}')`
                    }}
                >
                </div>
            </div>
        </ResizableBox>
                    
    ])
        
}

export default Edit;

