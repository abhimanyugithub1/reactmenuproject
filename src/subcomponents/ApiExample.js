import { useState,useEffect } from "react";
import axios from "axios";

const ApiExample=()=>
{



    const [mydata,setMydata]=useState([]);
    const loadData=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setMydata(res.data);
        });
    }

    useEffect(()=>{
        loadData();
    });








    return(
        <>
        
        <h1>Welcome To See my Data from API</h1>
        {mydata.slice(0,10).map((key)=>
        <>

                <h1>{key.id}</h1>
                <h3>{key.title}</h3>
                <p>{key.body}</p>
        </>
      
        
        
        
        )}
        </>
    );


   
}
export default ApiExample;