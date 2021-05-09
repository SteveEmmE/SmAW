const Edit = ({attributes, setAttributes}) => {
        
    const{
        imgUrl,
        backgroundColor,
        padding,
        sectionAlignment,
        maxWidthActive,
        maxWidth
    } = attributes;

    function onChangeImgUrl(media){

        let photo = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );

        console.log(photo);
        setAttributes({imgUrl: photo});
    }
    function onChangePadding(newPadding){ setAttributes({padding: newPadding});}
    function onChangeMaxWidthActive(){ setAttributes({maxWidthActive: !maxWidthActive});}
    function onChangeMaxWidth(newValue){ setAttributes({maxWidth: newValue});}
    function onChangeSectionAlignment(newAlignment){
        setAttributes({ sectionAlignment: newAlignment})
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
            <PanelBody title="Padding Control">
                <BoxControl
                    values={ padding}
                    onChange={ onChangePadding}
                />
            </PanelBody>
            <PanelBody title="Max Width">
                <ToggleControl
                    label="size"
                    checked={ maxWidthActive }
                    onChange={ onChangeMaxWidthActive }
                />
            </PanelBody>
            {
                maxWidthActive?
                    [
                        <PanelBody title="Max Width">
                            <RangeControl
                                label="width"
                                value={maxWidth}
                                onChange={onChangeMaxWidth}
                                min={ 0 }
                                max={ 2000 }
                            />
                        </PanelBody>,
                        <SelectControl
                            label={ 'Select the separator width:' }
                            value={ sectionAlignment }
                            onChange={  onChangeSectionAlignment }
                            options={ [
                                { value: null, label: 'Select an Alignment', disabled: true },
                                { value: 'mr-a', label: 'left' },
                                { value: 'mx-a', label: 'center' },
                                { value: 'ml-a', label: 'right' },
                            ] }
                        />
                    ]
                :
                ''
            }
        </InspectorControls>,
        <div className='tc-background-img'
            style={{
                backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                backgroundColor: backgroundColor,
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
                paddingRight: padding.right,
            }}
        >
            <div 
                className= {sectionAlignment}
                style={{
                    maxWidth: maxWidthActive? maxWidth+'px' : '100%',
                }}
            >
                <InnerBlocks/>
            </div>
            
        </div>
    ]);
}

export default Edit;