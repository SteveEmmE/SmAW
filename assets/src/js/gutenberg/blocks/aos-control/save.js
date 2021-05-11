import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        fade,
        flip,
        slide,
        zoom,
        offset,
        delay,
        duration,
        easing,
        anchorPlacement
    } = attributes;

    return (
        <div
        data-aos={fade+flip+slide+zoom}
        data-aos-anchor-placement={anchorPlacement}
        data-aos-easing={easing}
        data-aos-duration={duration}
        data-aos-delay={delay}
        data-aos-offset={offset}
        >
            <InnerBlocks.Content/>
        </div>
    )

}

export default Save;