import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';

registerBlockType('smaw-blocks/background', {

    title: 'Smaw Background',
    description: __('Background image', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    attributes:{
        imgUrl:{type: 'string', default: ''},
        backgroundColor:{type: 'string', default: ''},
        padding:{type: 'object',
            default: {
                top: '0em',
                left: '0em',
                right: '0em',
                bottom: '0em'
            }
        },
        sectionAlignment:{type: 'string', default: ''},
        maxWidthActive:{type: 'boolean', default: false},
        maxWidth:{type: 'number', default: 600}

    },

    edit: Edit,
    
    save: ({attributes}) => {
        const{
            imgUrl,
            backgroundColor,
            padding,
            sectionAlignment,
            sectionAlignmentLabel,
            maxWidthActive,
            maxWidth
        } = attributes;

        return (
            <div className='tc-background-img'
                style={{
                    backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                    backgroundColor: backgroundColor,
                    paddingTop: padding.top,
                    paddingBottom: padding.bottom,
                    paddingLeft: padding.left,
                    paddingRight: padding.right,
                    
                }}
            >
                <div 
                    className= {sectionAlignment}
                    style={{
                        maxWidth: maxWidthActive? maxWidth+'px' : '100%',
                    }}
                >
                    <InnerBlocks.Content/>
                </div>
            </div>
        )

    }
})