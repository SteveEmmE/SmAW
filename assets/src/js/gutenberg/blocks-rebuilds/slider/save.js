
const Save = ({attributes}) => {

    const{
        mediaUrls,
        mediaAlt,
        size,
        breakPoints,
    } = attributes;

    console.log('-');
    console.log(breakPoints);
    return(
        <ul className="lightSlider"  data-items={mediaUrls.length} data-breakpoints={JSON.stringify(breakPoints) }>
            {
                mediaUrls.map((url, i) => 
                    <li>
                        <img style={{display:'block', margin: 'auto'}} src={url[size]['url'] || url[size]['source_url']} alt={mediaAlt[i]}/>
                    </li>
                )
            }
        </ul>
    )

}

export default Save;