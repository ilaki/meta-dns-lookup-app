import React , { Component } from 'react';
import UrlLookupBox from './Url-lookup-view';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8080';

const initialState = { 
  metaTags : {},
  dnsRecords : {},
  currentView : '',
  error : '',
}

class UrlLookup extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getData = this.getData.bind(this);
  }

  getData(urlVal,lookupType) {
    if(!lookupType) {
      console.log('no loooookup found')
      this.setState({
        ...initialState,
        error : ['please select type of lookup from the select dropdown'],
      })
      return;
    }

    Axios({
      method : "GET",
      url: `/${lookupType}?tUrl=${encodeURIComponent(urlVal)}`,
      headers :{
        "Content-Type": "application/json"
      }
    }).then(res => {
      if(res.data.status && res.data.status === 200) {
        this.setState(() => {
          return {
            ...initialState,
            [lookupType] : res.data.serverResp,
            currentView : lookupType,
            error : ''
          }
        },
        ()=> console.log('state updated ,' + this.state))
      }
        else if(res.data.status && res.data.status === 404) {
          console.log('rrrrrr 400+')
          console.log(res.data.serverResp)
            this.setState((prevState) => {
              return {
                ...initialState,
                [lookupType] : res.data.serverResp,
                currentView : lookupType // ERROR OBJECT
              }
            },()=> {
              console.log('state updated ', this.state);
            })
        }      
    })
    .catch(err => {
     console.log('indisde errror')
      console.log(err);
      this.setState({
        ...initialState,
        error : ['error receiving data , check the url']
      })
    })
    }

  render() { 
    // let _currentView = this.state.currentView;
    // let data = (typeof(_currentView) === 'object')? _currentView 
    //                     : _currentView === 'metaTags'? this.state.metaTags : this.state.dnsRecords; 
    // console.log(data);
    let currentViewVal = this.state.currentView;
    let data = this.state.error ? this.state.error : this.state[currentViewVal];
    
    return ( 
        <UrlLookupBox data = {data || {}} getData = {this.getData} /> 
    );
  }
}
 
export default UrlLookup;

