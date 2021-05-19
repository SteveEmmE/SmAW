import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, ResizableBox, RangeControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';


const Edit = ({attributes, setAttributes, toggleSelection}) => {

    const{
        imagesSrc,
        imagesHeight,
        imagesWidth,
        imagesWidthOverflow
    } = attributes;



    function onChangeImagesSrc(media){

        let tmpImagesSrc = [];
        let tmpImagesWidth = [];
        console.log(media);
        media.forEach((m) => {
            let url = get( m, [ 'sizes', 'full', 'url' ] ) || get( m, [ 'media_details', 'sizes', 'full', 'source_url' ] );
            let width = get( m, [ 'sizes', 'full', 'width' ] ) || get( m, [ 'media_details', 'sizes', 'full', 'width' ] );

            tmpImagesWidth.push(width);
            tmpImagesSrc.push(url);
        })  


        setAttributes({imagesSrc: tmpImagesSrc});
        setAttributes({imagesWidth: tmpImagesWidth});

    }

    console.log(imagesSrc);

    function onChangeImagesWidthOverflow(){
        setAttributes({imagesWidthOverflow: !imagesWidthOverflow});
        console.log(imagesWidthOverflow);
    }



    return ([



        <InspectorControls>
            <PanelBody title={"Select the image/images"}>
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
                    onSelect={onChangeImagesSrc}
                    accept="image/*"
                    allowedTypes={['image']}
                    multiple="true"
                />    
            </PanelBody>

            <PanelBody>
                <ToggleControl
                    label="Width Overflow"
                    checked={imagesWidthOverflow}
                    onChange={onChangeImagesWidthOverflow}
                />
            </PanelBody>
        </InspectorControls>,

        <ResizableBox
            size={ {
                width: '100%',
                height: imagesHeight
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
                    imagesHeight: (parseInt( imagesHeight, 10)+delta.height) + 'px',
                } );
                toggleSelection( true );
            } }
            onResizeStart={ () => {
                toggleSelection( false );
            } }
        >
            <div 
                className='image-container'
                style={{
                    height: imagesHeight,
                }}    
            >
                <img 
                    src={imagesSrc[0]} 
                    style={{
                        display: 'block',
                        height:'100%',
                        minWidth: `${imagesWidthOverflow ? imagesWidth[0]+'px' : 'auto'}`,
                        opacity:1
                    }}
                />
               
            </div>
        </ResizableBox>
                    
    ])
        
}

export default Edit;

