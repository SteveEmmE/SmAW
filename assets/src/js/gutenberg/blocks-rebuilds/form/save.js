import {RichText} from '@wordpress/block-editor';

const Save = ({attributes}) => {
    const{
        alignment,
        linkText,
        privacyPolicyText
    } = attributes;

    return (
        <div className="enquiry_box" >
            <form id="enquiry">
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="NOME E COGNOME*"/>
                </div>
                <div className="form-group">
                    <input type="email" name="email"  placeholder="EMAIL *" required/>
                </div>
                <div className="form-group">
                    <textarea name="mex" placeholder="MESSAGGIO *" required></textarea>
                </div>
                <div className="form-group mb-3">
                    <input className="styled-checkbox" type="checkbox" id="check-privacy" required/>
                        <RichText.Content
                            tagName="label"
                            placeholder="link..."
                            value={privacyPolicyText}
                            htmlFor="check-privacy"
                        />  
                </div>
            
                <div className="wp-block-buttons is-content-justification-center">
                    <div className="wp-block-button has-custom-width wp-block-button__width-25 is-style-outline">
                        <button
                            className="wp-block-button__link has-cinnabar-color has-text-color no-border-radius"
                            type='submit'    
                        > 
                            <RichText.Content
                                tagName="span"
                                placeholder="link..."
                                value={linkText}
                                className="qodef-btn-text"
                            />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default Save;