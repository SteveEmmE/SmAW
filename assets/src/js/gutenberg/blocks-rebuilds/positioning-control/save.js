import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        position,
        displacement
    } = attributes;

    return (
        <div 
            style={{
                position: position,
                top: displacement.top,
                bottom: displacement.bottom,
                left: displacement.left,
                right: displacement.right,
            }}
        >
            <InnerBlocks.Content/>
        </div>
    )
}

export default Save;