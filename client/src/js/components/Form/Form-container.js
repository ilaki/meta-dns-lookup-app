import  React , { Component } from 'react';
import UrlInputBox from './Form-view';
import { isUrl } from '../../helpers/utils';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            urlVal : '',
            lookupType : ''
        };
        
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.setLookupType = this.setLookupType.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if(this.state.urlVal === e.target.value) return;
        this.setState({
            ...this.state,
            urlVal : e.target.value
        },()=> {
            console.log('state updated' )}
         )
    }

    handleSubmit(e) {
        e.preventDefault();
        if(isUrl(this.state.urlVal)) {
            this.props.getData(this.state.urlVal,this.state.lookupType)
        } 
    }

    setLookupType(selectedOption) {
        console.log('----------------------------' + selectedOption)
        if(this.state.lookupType === selectedOption) return;
        this.setState({
            ...this.state,
            lookupType : selectedOption
        })
    }

    render() {
        return (
            <UrlInputBox val = {this.state.urlVal} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} setLookupType = {this.setLookupType} />    
        );
    }
}

export default Form;