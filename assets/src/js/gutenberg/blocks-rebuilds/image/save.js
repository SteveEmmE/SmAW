
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
                        className={`${i==0 ? 'foreground': ''}`}
                        src={image} 
                        style={{
                            display: 'block',
                            height:'100%',
                            minWidth: `${imagesWidthOverflow ? imagesWidth[i]+'px' : 'auto'}`
                        }}
                    />
                )
            }
            
        </div>
    )

}

export default Save;