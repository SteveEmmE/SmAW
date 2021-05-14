import {InnerBlocks} from '@wordpress/block-editor';

const Save = ({attributes}) => {

    const{
        imageSrc,
        imageZoom,
        centering,
        positionX,
        positionY,
        speed,
        speedXs,
        speedMobile,
        speedTablet,
        speedDesktop,
        sectionHeight,
        sectionWidth,
        zIndex,
    } = attributes;

    return (   
        <div 
            className="parallax-container"
            style={{
                height: sectionHeight,

            }}    
        >
            <div 
                className="rellax"
                data-rellax-speed={speed}
                data-rellax-xs-speed={speedXs}
                data-rellax-mobile-speed={speedMobile}
                data-rellax-tablet-speed={speedTablet}
                data-rellax-desktop-speed={speedDesktop}
                data-rellax-percentage={centering? '0.5': ''}
                style={{
                    backgroundPositionX:`${positionX}%`,
                    height: `${imageZoom}%`,
                    top: `${positionY}%`,
                    zIndex: zIndex,
                    backgroundImage: `url('${imageSrc}')`
                }}
            >
            </div>
        </div>
            
    )

}

export default Save;