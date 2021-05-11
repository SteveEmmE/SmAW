import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        imgUrl,
        backgroundColor,
        focalPoints,
        repeat,
        sizeX,
        sizeY
    } = attributes;

    return (
        <div
            style={{
                backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                backgroundColor: backgroundColor,
                backgroundPosition: `${ (1 - focalPoints.x) * 100 }% ${ focalPoints.y * 100 }%`,
                backgroundSize: `${ sizeX!=0 ? sizeX+'%' : 'auto' } ${ sizeY!=0 ? sizeY+'%' : 'auto'  }`,
                backgroundRepeat: repeat ? 'repeat' : 'no-repeat'
            }}
        >
            <InnerBlocks.Content/>
        </div>
    )
}

export default Save;