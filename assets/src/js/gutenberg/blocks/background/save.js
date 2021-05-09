import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        imgUrl,
        backgroundColor,
        focalPoints
    } = attributes;

    return (
        <div className='tc-background-img'
            style={{
                backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                backgroundColor: backgroundColor,
                backgroundPosition: `${ focalPoints.x * 100 }% ${ focalPoints.y * 100 }%`
            }}
        >
            <InnerBlocks.Content/>
        </div>
    )
}

export default Save;