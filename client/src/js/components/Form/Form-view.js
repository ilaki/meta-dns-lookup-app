import React, {useState, useEffect} from 'react';
import './formStyles.css'; 
import Select from 'react-select';

const options= [
    { value: 'metaTags', label: 'meta' },
    { value: 'dnsRecords', label: 'dns' }
];

function UrlInputBox(props) {
    const [selectedOption , setSelectedOption] = useState({});
    console.log('remnder')
    useEffect(()=> {
        console.log(selectedOption.value)
        props.setLookupType(selectedOption.value);

    },[selectedOption]);

    const handleTypeChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }

    return (
        <form className = "lookup" onSubmit = {props.handleSubmit}>
                    <Select 
                    theme = {(theme)=>({...theme ,colors : { ...theme.colors,primary25 : '#00868F'}})}
                    className = "lookup__type"
                onChange={handleTypeChange}
                placeholder = "type"
                options = {options}
                autofocus
            />
            
            {/* <div class="lookup--icon">
                <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
                    <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                </svg>
            </div> */}
            <input type = "text" className = "lookup__url"  onChange = {props.handleChange} placeholder = "some-domain.com" />
            <input className = "lookup__btn" value = "lookMeUp"type = "submit" />
        </form>
    );
}

export default UrlInputBox;