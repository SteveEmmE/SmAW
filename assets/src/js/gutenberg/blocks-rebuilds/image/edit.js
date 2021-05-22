import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, RangeControl, ResizableBox, SelectControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';
import { __ } from '@wordpress/i18n';


const Edit = ({attributes, setAttributes, toggleSelection}) => {

    const{
        imagesSrc,
        imagesHeight,
        imagesWidth,
        imagesWidthOverflow,
        allowedSizes,
        size,
        gallery
    } = attributes;



    function onChangeImagesSrc(media, imageSize=null){

        let tmpImagesSrc = [];
        let tmpImagesWidth = [];
        let tmpAllowedSizes =[];
        console.log(media);

        let selectedImageSize = imageSize!=null ? imageSize : 'full';

        media.forEach((m, i) => {
            let url = get( m, [ 'sizes', selectedImageSize, 'url' ] ) || get( m, [ 'media_details', 'sizes', selectedImageSize, 'source_url' ] );
            let sizes = get( m, [ 'sizes'] ) || get( m, [ 'media_details', 'sizes'] );
            if(i == 0) tmpAllowedSizes = Object.keys(sizes);
            else tmpAllowedSizes = tmpAllowedSizes.filter(s => Object.keys(sizes).includes(s))
            let width = get( m, [ 'sizes', selectedImageSize, 'width' ] ) || get( m, [ 'media_details', 'sizes', selectedImageSize, 'width' ] );

            tmpImagesWidth.push(width);
            tmpImagesSrc.push(url);
        })  


        setAttributes({allowedSizes: tmpAllowedSizes});
        setAttributes({imagesSrc: tmpImagesSrc});
        setAttributes({imagesWidth: tmpImagesWidth});
        setAttributes({gallery: media});

    }

    const onChangeImagesWidth = [];
    for(let i=0; i<imagesSrc.length; i++){
        onChangeImagesWidth.push((newValue) => {
            let tmpImagesWidth = [...imagesWidth];
            tmpImagesWidth[i] = newValue;
            setAttributes({imagesWidth: tmpImagesWidth});
        })
    }

    function onChangeSize(newSize){
        setAttributes({size: newSize})
        onChangeImagesSrc(gallery, size);
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
                <SelectControl
                    label={ 'Select the size for the images:' }
                    value={ size } // e.g: value = [ 'a', 'c' ]
                    onChange={  onChangeSize }
                    options={  [{value: null, label: 'Select a size', disabled: true },
                            ...allowedSizes.map(s => {return {value: s, label: s}})
                    ]}
                />
                {
                    imagesWidth.map((val, i) => 
                        <RangeControl
                            label={'image '+i+' size'}
                            max={2000}
                            min={0}
                            value={val}
                            onChange={onChangeImagesWidth[i]}
                        />
                    )
                }  
            </PanelBody>


            <PanelBody>
                <SelectControl
                    label={ __( 'breakpoint overflow property' ) }
                    value={ imagesWidthOverflow }
                    options={
                        [
                            { label: __('sm'), value:'overflow-sm' },
                            { label: __('md'), value:'overflow-md' },
                            { label: __('lg'), value:'overflow-lg' },
                            { label: __('xl'), value:'overflow-xl' },
                            { label: __('xxl'), value:'overflow-xxl' }
                        ]
                    }
                    onChange={ ( selectedimagesWidthOverflow ) => {
                        setAttributes( {
                            imagesWidthOverflow: selectedimagesWidthOverflow
                        } );
                    } }
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
                className={`image-container ${imagesWidthOverflow}`}
                style={{
                    height: imagesHeight,
                }}    
            >
                <img 
                    src={imagesSrc[0]} 
                    style={{
                        opacity:1,
                        width: imagesWidth[0],
                        height:'auto'
                    }}
                    className={imagesWidthOverflow}

                />
               
            </div>
        </ResizableBox>
                    
    ])
        
}

export default Edit;

