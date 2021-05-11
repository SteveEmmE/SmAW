import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        maxWidthActive,
        maxWidth,
        maxHeightActive,
        maxHeight,
        minWidthActive,
        minWidth,
        minHeightActive,
        minHeight,
        sectionAlignment,
    } = attributes;

    return (
        <div
            className= {sectionAlignment + " sizes-control"}
            style={{
                maxWidth: maxWidthActive? maxWidth : 'none',
                maxHeight: maxHeightActive? maxHeight : 'none',
                minWidth: minWidthActive? minWidth : 'none',
                minHeight: minHeightActive? minHeight : 'none',
            }}
        >
            <InnerBlocks.Content/>
        </div>
    )

}

export default Save;