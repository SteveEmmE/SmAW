import {InspectorControls, InnerBlocks, MediaPlaceholder} from '@wordpress/block-editor';
import {PanelBody, ResizableBox, SelectControl, ToggleControl} from '@wordpress/components';
import get from 'lodash/get';


const Edit = ({clientId, attributes, setAttributes, toggleSelection} ) => {
        
    const{
        id,
        images,
        imageWidth,
        imageWidthSave,
        imageHeight,
        rowDirection,
        responsiveTrigger,
        innerBlockWidth
    } = attributes;

   

    function onChangeImagesUrl(media){

        console.log(media);

        //let newUrl = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );

        let newId;

        let tmpMediaUrls = [];
        media.forEach((m, i) => {
            let photo = get( m, [ 'sizes', 'full', 'url' ] ) || get( m, [ 'media_details', 'sizes', 'full', 'source_url' ] );
            tmpMediaUrls.push(photo);
            console.log(photo)
            if(i==0)
                newId = get(m, [ 'id']);
        })
        

        setAttributes({images: tmpMediaUrls});
        setAttributes({id: 'id'+newId});

    }

    function onChangeRowDirection(){
        setAttributes({rowDirection: !rowDirection});
    }
    function onResizeStop(event, direction, elt, delta ){
        
        let actualImageWidth = (parseInt( imageWidth, 10)+delta.width);
        let actualImageHeight = (parseInt( imageHeight, 10)+delta.height);   
        
   
        setAttributes( {imageWidth: actualImageWidth+'px'} );
        setAttributes( {imageHeight: actualImageHeight+'px'} );
        

        console.log(wpBlockWidth + ' - ' + wpBlockImageWidth + ' = ' + innerBlockWidth);
        console.log((wpBlockWidth-wpBlockImageWidth) + 'px');

        let wpBlockWidth = document.querySelector('#block-'+clientId+'>div').offsetWidth;
        let wpBlockImageWidth = document.querySelector('.tc-col-image'+id?`.${id}`:'').offsetWidth;

        setAttributes( {innerBlockWidth: (wpBlockWidth-wpBlockImageWidth)+'px'})

        
        setAttributes({imageWidthSave: parseInt(actualImageWidth/wpBlockWidth*100)+'%'});

        console.log(parseInt(wpBlockImageWidth/wpBlockWidth*100)+'%');
        
        toggleSelection( true );
    }


    function onChangeResponsiveTrigger(newValue){
        setAttributes({responsiveTrigger: newValue})
    }

 

    return ([
        <InspectorControls style={{marginBottom: '40px'}}>
            <PanelBody title={"Set Line Width"}>
                <MediaPlaceholder
                    key={0}
                    style={{
                        imageWidth: '100%',
                        height: '100%'
                    }}
                    icon="format-image"
                    labels={{
                        title: 'Media area',
                    }}
                    className="block-image image"
                    onSelect={onChangeImagesUrl}
                    accept="image/*"
                    allowedTypes={['image']}
                    multiple="true"
                />  
                
            </PanelBody>
            <PanelBody title="Row Direction Control">
             <ToggleControl
                    label="Row Direction"
                    checked={ rowDirection }
                    onChange={ onChangeRowDirection }
                />
            </PanelBody>




            <PanelBody> 
                <SelectControl
                    label={ 'Responsive Column Control:' }
                    value={ responsiveTrigger }
                    onChange={  onChangeResponsiveTrigger }
                    options={ [
                        { value: null, label: 'Select size', disabled: true },
                        { value: '', label: 'none' },
                        { value: 'col-sm-responsive', label: 'sm' },
                        { value: 'col-md-responsive', label: 'md' },
                        { value: 'col-lg-responsive', label: 'lg' },
                        { value: 'col-xl-responsive', label: 'xl' },
                        { value: 'col-xxl-responsive', label: 'xxl' },
                    ] }
                />
            </PanelBody>
        </InspectorControls>,
        <div 
            className={`d-flex align-center ${rowDirection? 'row-reverse' : ''} ${responsiveTrigger}`}>
            <ResizableBox
                size={ {
                    imageWidth,
                    imageHeight
                } }
                minHeight="50"
                minWidth="50"
                enable={ {
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    topRight: false,
                    bottomRight: false,
                    bottomLeft: false,
                    topLeft: false,
                } }
                onResizeStop={onResizeStop}
                onResizeStart={ () => {
                    let wpBlockImageWidth = document.querySelector('.tc-col-image'+id?`.${id}`:'').offsetWidth;
                    let wpBlockImageHeight = document.querySelector('.tc-col-image'+id?`.${id}`:'').offsetHeight;
                    setAttributes({imageWidth: wpBlockImageWidth});
                    setAttributes({imageHeight: wpBlockImageHeight});
                    toggleSelection( false );

                } }
            >
                <div className={"tc-col-image editor "+id}
                    style={{
                        width: imageWidth,
                        height: imageHeight
                    }}
                >
                    <div className="tc-col-image-container">
                        <img 
                            src={images[0]} 
                            style={{opacity:1}}
                        />
                    </div>
                    
                </div>
            </ResizableBox>
            

            <div 
                className="tc-col-inner-blocks"
                style={{
                    width: innerBlockWidth
                }}
                
            >
                <InnerBlocks/>
            </div>

        </div>
        
    ]);


}


export default Edit;