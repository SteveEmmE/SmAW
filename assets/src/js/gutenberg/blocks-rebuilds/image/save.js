
const Save = ({attributes}) => {

    const{
        imagesSrc,
        imagesHeight,
        imagesWidth,
        imagesWidthOverflow,
        size
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
                        src={image[size].url || image[size].source_url} 
                        style={{width: imagesWidth[i]}}
                    />
                )
            }
            
        </div>
    )

}

export default Save;