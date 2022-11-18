import { useState,useEffect } from "react";
import axios from "axios";

const ApiExample2=()=>
{



    const [mydata,setMydata]=useState([]);

    const [isError,setError]=useState("");

    const loadData=async()=>
    {
        try{
            const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
            setMydata(res.data);
        }
        catch(error){

            setError(error.message);

        }
      
        
    }

    useEffect(()=>{
        loadData();
    },[]);








    return(
        <>
        
        <h1>Welcome To See my Data from API</h1>
        <h1>{isError} </h1>

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
export default ApiExample2;