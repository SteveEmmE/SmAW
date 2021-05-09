import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import {InnerBlocks} from '@wordpress/block-editor';




registerBlockType('smaw-blocks/background', {

    title: 'Smaw Background',
    description: __('Background image', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    attributes:{
        imgUrl:{type: 'string', default: ''},
        backgroundColor:{type: 'string', default: ''},
    },
   

    edit: Edit,
    
    save: ({attributes}) => {
        const{
            imgUrl,
            backgroundColor,
        } = attributes;

        return (
            <div className='tc-background-img'
                style={{
                    backgroundImage: imgUrl!=''? `url(${imgUrl})`: '',
                    backgroundColor: backgroundColor,
                }}
            >
                <InnerBlocks.Content/>
            </div>
        )

    }
})