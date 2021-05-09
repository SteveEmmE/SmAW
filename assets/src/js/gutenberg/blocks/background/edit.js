import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, ColorPicker} from '@wordpress/components';
import get from 'lodash/get';


const Edit = ({attributes, setAttributes}) => {
        
    const{
        imgUrl,
        backgroundColor,
    } = attributes;

    function onChangeImgUrl(media){
        let photo = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );
        setAttributes({imgUrl: photo});
    }
    function onChangeBackgroundColor(newColor){
        let rgbaColor = `rgba(${newColor.rgb.r},${newColor.rgb.g},${newColor.rgb.b},${newColor.rgb.a})`
        setAttributes({backgroundColor: rgbaColor});
    }

 

    return ([
        <InspectorControls style={{marginBottom: '40px'}}>
            <PanelBody title={"Set Background Image"}>
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
        </InspectorControls>,
        <div className='tc-background-img'
            style={{
                backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                backgroundColor: backgroundColor,
            }}
        >
            <InnerBlocks/>
        </div>
    ]);
}

export default Edit;