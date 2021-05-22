
const Save = ({attributes}) => {

    const{
        imagesSrc,
        imagesHeight,
        imagesWidth,
        imagesWidthOverflow
    } = attributes;


    return (
        <div 
            className={`image-container ${imagesWidthOverflow}`}
            style={{
                height: imagesHeight,
            }}  
        >  

            {
                imagesSrc.map((image, i) => 
                    <img 
                        className={`${i==0 ? 'foreground': ''} ${imagesWidthOverflow}`}
                        src={image} 
                        style={{width: imagesWidth[i]}}
                    />
                )
            }
            
        </div>
    )

}

export default Save;