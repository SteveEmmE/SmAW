import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        margin,
        padding
    } = attributes;

    return (       
        <div 
            style={{
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
                paddingRight: padding.right,
                marginTop: margin.top,
                marginBottom: margin.bottom,
                marginLeft: margin.left,
                marginRight: margin.right,
            }}
        >
            <InnerBlocks.Content/>
        </div> 
    )


}

export default Save;