import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, ColorPicker, FocalPointPicker, RangeControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';


const Edit = ({attributes, setAttributes}) => {
        
    const{
        imgUrl,
        backgroundColor,
        focalPoints,
        repeat,
        sizeX,
        sizeY
    } = attributes;

    function onChangeImgUrl(media){
        let photo = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );
        setAttributes({imgUrl: photo});
    }
    function onChangeBackgroundColor(newColor){
        let rgbaColor = `rgba(${newColor.rgb.r},${newColor.rgb.g},${newColor.rgb.b},${newColor.rgb.a})`
        setAttributes({backgroundColor: rgbaColor});
    }
    function onChangeFocalPoints(newFocalPoints){
        setAttributes({focalPoints: newFocalPoints});
    }
    function onChangeRepeat(newValue){
        setAttributes({repeat: newValue});
    }
    function onChangeSizeX(newValue){
        setAttributes({sizeX: newValue});
    }
    function onChangeSizeY(newValue){
        setAttributes({sizeY: newValue});
    }

 

    return ([
        <InspectorControls style={{marginBottom: '40px'}}>
            <PanelBody title={"Background Image"}>
                <MediaPlaceholder
                    key={0}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    icon="format-image"
                    labels={{
                        title: 'Media area',
                    }}
                    className="block-image image"
                    onSelect={onChangeImgUrl}
                    accept="image/*"
                    allowedTypes={['image']}
                />  
            </PanelBody>
            <PanelBody title={"Background Color"}>
                <ColorPicker
                    color={ backgroundColor }
                    onChangeComplete={onChangeBackgroundColor }
                />
            </PanelBody>
            <PanelBody>
                <FocalPointPicker
                    value={ focalPoints }
                    onChange={ onChangeFocalPoints }
                />
            </PanelBody>
            <PanelBody>
                <RangeControl
                    label="X background size"
                    value={ sizeX }
                    onChange={ onChangeSizeX }
                    min={ 0 }
                    max={ 100 }
                    initialPosition={100}
                />
            </PanelBody>
            <PanelBody>
                <RangeControl
                    label="Y background size"
                    value={ sizeY }
                    onChange={ onChangeSizeY }
                    min={ 0 }
                    max={ 100 }
                    initialPosition={0}
                />
            </PanelBody>
            <PanelBody>
                <ToggleControl
                    label="repeat"
                    checked={ repeat }
                    onChange={ onChangeRepeat }
                />
            </PanelBody>
            

        </InspectorControls>,
        <div
            style={{
                backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                backgroundColor: backgroundColor,
                backgroundPosition: `${ (1 - focalPoints.x) * 100 }% ${ focalPoints.y * 100 }%`,
                backgroundSize: `${ sizeX!=0 ? sizeX+'%' : 'auto' } ${ sizeY!=0 ? sizeY+'%' : 'auto'  }`,
                backgroundRepeat: repeat ? 'repeat' : 'no-repeat'
            }}
        >
            <InnerBlocks/>
        </div>
    ]);
}

export default Edit;