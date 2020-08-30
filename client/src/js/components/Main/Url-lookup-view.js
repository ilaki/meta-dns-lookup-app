import  React from 'react';
import Form from '../Form/Form-container';
import Results from '../Results/Results-view';
import './urlLookupBoxStyles.css';

const UrlLookupBox = ({ data , getData }) => {
    return (
        <div className = "urlLookupBox">
            <Form getData = {getData} />
            <Results data = {data}/> 
        </div>
      );  
}

export default UrlLookupBox;