import {useState} from 'react';

const UseToggle = (initValue) => {
    const [val, setVal] = useState(initValue);
    const toggle = () => {
        setVal(!val);
    }
    return [val, toggle];
}

export default UseToggle;