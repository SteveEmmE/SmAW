import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

registerBlockType('smaw-blocks/background', {

    title: 'Smaw Background',
    description: __('Background image', 'smaw'),
    icon: 'format-image',
    category: 'smaw-blocks',

    edit() {

 
        return (
            <div >Hello World, step 1 (from the editor).</div>
        );
    },
    save() {
        return (
            <div>
                Hello World, step 1 (from the frontend).
            </div>
        );
    }
})