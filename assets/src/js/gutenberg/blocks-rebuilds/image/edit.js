import {InspectorControls, MediaPlaceholder, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, ResizableBox, SelectControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';
import { __ } from '@wordpress/i18n';


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
                className='image-container'
                style={{
                    height: imagesHeight,
                }}    
            >
                <img 
                    src={imagesSrc[0]} 
                    style={{
                        opacity:1
                    }}
                    className={imagesWidthOverflow}

                />
               
            </div>
        </ResizableBox>
                    
    ])
        
}

export default Edit;

