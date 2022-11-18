import {useState} from "react";

const HooksExample = ()=>{


    const [stuname,UpdateName]=useState("Abhimanyu");
    const Myval = ()=>
    {
        UpdateName("Anamika");
    }

    return(
<>

            <h1>My Name is  {stuname} from Bhopal</h1>
            <button onClick={Myval}>Click Here </button>



</>

        
    );

}

export default HooksExample;