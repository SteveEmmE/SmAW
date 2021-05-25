import {AlignmentToolbar, BlockControls, InspectorControls, RichText} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const Edit = ({attributes, setAttributes}) => {

    const{
        alignment,
        linkText,
        privacyPolicyText
    } = attributes;

    function onChangeAlignment(newAlignment){
        let tmpAlign = ["", ""];
        switch (newAlignment) {
            case 'center':
                tmpAlign[1] = 'auto';
                tmpAlign[0] = 'auto';
                break;
            case 'left':
                tmpAlign[1] = '0';
                tmpAlign[0] = 'auto';
                break;
            case 'right':
                tmpAlign[1] = 'auto';
                tmpAlign[0] = '0';
                break;  
            default:
                break;
        }
        setAttributes({alignment: tmpAlign});
    }

    function onChangeLinkText(newLinkText){
        setAttributes({linkText: newLinkText});
    }
    function onChangePrivacyPolicyText(newPrivacyPolicyText){
        setAttributes({privacyPolicyText: newPrivacyPolicyText});
    }

    return ([
            <InspectorControls>
                <PanelBody>
                    <TextControl
                        label="Privacy policy text"
                        value={ privacyPolicyText }
                        onChange={ onChangePrivacyPolicyText }
                    />
                </PanelBody>
                <PanelBody>
                    <TextControl
                        label="Button text"
                        value={ linkText }
                        onChange={ onChangeLinkText }
                    />
                </PanelBody>
            </InspectorControls>,
        
            <BlockControls>
                <AlignmentToolbar 
                    value={alignment}
                    onChange={onChangeAlignment}
                />
            </BlockControls>,
            <div className="enquiry_box" >
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="NOME E COGNOME*"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="formGroupExampleInput" placeholder="EMAIL *"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="MESSAGGIO *"></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <input className="styled-checkbox" type="checkbox" id="check-privacy"/>
                            <RichText key="editable"
                                tagName="label"
                                placeholder="link..."
                                value={privacyPolicyText}
                                onChange={onChangePrivacyPolicyText}
                                htmlFor="check-privacy"
                            />  
                    </div>

                    <div class="wp-block-buttons is-content-justification-center">
                        <div class="wp-block-button has-custom-width wp-block-button__width-25 is-style-outline">
                            <a class="wp-block-button__link has-cinnabar-color has-text-color no-border-radius"> 
                                <RichText.Content
                                    tagName="span"
                                    placeholder="link..."
                                    value={linkText}
                                    className="qodef-btn-text"
                                />
                            </a>
                        </div>
                    </div>
                    
                </form>
            </div>
           
    ])
        
}

export default Edit;

