import {useState} from "react";

const HooksExample4 = ()=>{


    const [cnt,setCnt]=useState(0);
  

    return(
<>

            <h1>My Number is :  {cnt}</h1>
            <button onClick={()=>{setCnt(cnt+1)}}>Count Increment </button>
            <button onClick={()=>{setCnt(cnt-1)}}>Count Decrement </button>
           



</>

        
    );

}

export default HooksExample4;