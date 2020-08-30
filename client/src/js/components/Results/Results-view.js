import React from 'react';
// import Tile from './Tile-view';
import './resultStyle.css';

// const Results = ({data})=>{
//     // let data = ['1']
//     const tiles = data.map((index,val)=>{
//         return (<Tile key = {index} data = {val} />);
//     }

//     return (<ul>{1}</ul>);  
// }

const Results = ({data}) => {
    
    let tile;
    
    if(Object.keys(data)[0] === '0') {
        tile = Object.entries(data).map(([key,value])=> {
            return <li className = 'listItem' key = {key}> {value.toString()} </li> 
        })
    }
    else {
        tile = Object.entries(data).map(([key,value])=> { 
            return <li className = 'listItem' key = {key}> {key} : {value.toString()} </li> 
        })
    
    }
    return (<ul className = "resultsList"> {tile} </ul>);
}


export default Results;