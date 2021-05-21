import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        imgUrl,
        filterActive,
        filterColor,
        backgroundColor,
        focalPoints,
        repeat,
        cover,
        sizeX,
        sizeY
    } = attributes;

    const backgroundSizeValue = (cover) => {
        if (cover) return 'cover';
        return  `${sizeX!=0 ? sizeX+'%' : 'auto'}  ${sizeY!=0 ? sizeY+'%' : 'auto' }`;
    }

    return (
        <div
            style={{
                backgroundImage: `${filterActive? 'linear-gradient('+filterColor+', '+filterColor+'),' : ''} ${imgUrl!=''? 'url('+imgUrl+')': ''}`,
                backgroundColor: backgroundColor,
                backgroundPosition: `${ (1 - focalPoints.x) * 100 }% ${ focalPoints.y * 100 }%`,
                backgroundSize: backgroundSizeValue(cover),
                backgroundRepeat: repeat ? 'repeat' : 'no-repeat'
            }}
        >
            <InnerBlocks.Content/>
        </div>
    )
}

export default Save;