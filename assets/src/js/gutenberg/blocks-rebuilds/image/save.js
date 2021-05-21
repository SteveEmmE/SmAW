
const Save = ({attributes}) => {

    const{
        imagesSrc,
        imagesHeight,
        imagesWidth,
        imagesWidthOverflow
    } = attributes;


    return (
        <div 
            className='image-container'
            style={{
                height: imagesHeight,
            }}  
        >  

            {
                imagesSrc.map((image, i) => 
                    <img 
                        className={`${i==0 ? 'foreground': ''} ${imagesWidthOverflow}`}
                        src={image} 
                    />
                )
            }
            
        </div>
    )

}

export default Save;