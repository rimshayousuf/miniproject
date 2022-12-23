import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import axios  from 'axios';

const ApiCall = () => {
    
//   const [list, updateList] = useState(marks);

useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) =>{
        console.log(res);
    })  
 },[]);
 

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApiCall/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();