import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApiCall = () => {
    
    const [Mydata, setData] = useState([]);
    const[isError, setError] = useState("");
  
   // using Promise
    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products')
    //     .then((res) => setData(res.data))  
    //     .catch((error) => setError(error.message));
    //  },[]);
     const getApiData = async() =>{
      try{
        const res = await axios.get('https://fakestoreapi.com/products');
        let ans1=res.data.map((item)=>({value:item.id,label:item.title + " " +item.price}))
        setData([...ans1]);
        //console.log(res.data);
      }
      catch(error){
        setError(error.message);
      } 
    }
    //using async await
    useEffect(() =>{
        getApiData();
    },[]);
  
     return(
      <>
        <h1>Axios API Data</h1>
        {isError !== "" && <h3>{isError}</h3>}
        
        <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Select options={Mydata} />
        </div>
      </div>
    </div>
      </>
     );
    }

    export default ApiCall;