import {InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody} from '@wordpress/components';
import { __experimentalBoxControl as BoxControl, SelectControl } from '@wordpress/components';



const Edit = ({attributes, setAttributes}) => {

    const{
        position,
        displacement
    } = attributes;

    function onChangeDisplacement(newValues){ 
        let newDisplacement = {};
        for (const value in newValues) {
            if(newValues[value].charAt(0) == '0')
                newDisplacement[value] = '';
            else
                newDisplacement[value] = newValues[value]; 
            console.log(`${value}: ${newValues[value]}`);
        }
        setAttributes({displacement: newDisplacement});
    }
    function onChangePosition(newValue) { setAttributes({position: newValue})}



    return ([
        <InspectorControls style={{marginBottom: '40px'}}>
            <PanelBody> 
                <SelectControl
                    label={ 'Positioning:' }
                    value={ position }
                    onChange={  onChangePosition }
                    options={ [
                        { value: null, label: 'Select positiion', disabled: true },
                        { value: 'relative', label: 'relative' },
                        { value: 'absolute', label: 'absolute' }
                    ] }
                />
            </PanelBody>
            <PanelBody title="Displacement Control">
                <BoxControl
                    values={ displacement}
                    onChange={ onChangeDisplacement}
                />
            </PanelBody>
        </InspectorControls>,

        <div 
            style={{
                position: position,
                top: displacement.top,
                bottom: displacement.bottom,
                left: displacement.left,
                right: displacement.right,
            }}
        >
            <InnerBlocks/>
        </div>
      
       
       
    ])
}

export default Edit;