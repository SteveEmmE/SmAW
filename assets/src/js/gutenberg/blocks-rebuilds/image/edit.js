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
        size
    } = attributes;



    function onChangeImagesSrc(media){

        let tmpImagesSrc = [];
        let tmpImagesWidth = [];
        let tmpAllowedSizes =[];
        console.log(media);

        

        media.forEach((m, i) => {
            let url = get( m, [ 'sizes'] ) || get( m, [ 'media_details', 'sizes'] );
            let sizes = get( m, [ 'sizes'] ) || get( m, [ 'media_details', 'sizes'] );
            if(i == 0) tmpAllowedSizes = Object.keys(sizes);
            else tmpAllowedSizes = tmpAllowedSizes.filter(s => Object.keys(sizes).includes(s))
            let width = get( m, [ 'sizes', 'full', 'width' ] ) || get( m, [ 'media_details', 'sizes', 'full', 'width' ] );

            tmpImagesSrc.push(url);
            tmpImagesWidth.push(width);
        })  


        setAttributes({allowedSizes: tmpAllowedSizes});
        setAttributes({imagesSrc: tmpImagesSrc});
        setAttributes({imagesWidth: tmpImagesWidth});

    }

    const onChangeImagesWidth = [];
    for(let i=0; i<imagesSrc.length; i++){
        onChangeImagesWidth.push((newValue) => {
            console.log(newValue);
            let tmpImagesWidth = [...imagesWidth];
            tmpImagesWidth[i] = newValue;
            setAttributes({imagesWidth: tmpImagesWidth});
        })
    }

    function onChangeSize(newSize){
        setAttributes({size: newSize})
        let tmpImagesWidth = [];
        Array.from(imagesSrc).forEach( (s, i) => {
            tmpImagesWidth.push(s[newSize].width);
        })
        setAttributes({imagesWidth: tmpImagesWidth});

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
                {
                    imagesSrc[0] ?
                        <img 
                            src={imagesSrc[0][size].url || imagesSrc[0][size].source_url} 
                            style={{
                                opacity:1,
                                width: imagesWidth[0],
                                height:'auto'
                            }}
                            className={imagesWidthOverflow}

                        />
                    :
                    ''

                }
                
               
            </div>
        </ResizableBox>
                    
    ])
        
}

export default Edit;

