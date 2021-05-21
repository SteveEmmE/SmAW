import { __experimentalUnitControl as UnitControl } from '@wordpress/block-editor/';
 
const Example = () => {
    const [ value, setValue ] = useState( '10px' );
    const units = [
        { value: 'px', label: 'px', default: 0 },
        { value: '%', label: '%', default: 10 },
        { value: 'em', label: 'em', default: 0 },
    ];
 
    return <UnitControl onChange={ setValue } value={ value } units={units} />;
};

export default Example;