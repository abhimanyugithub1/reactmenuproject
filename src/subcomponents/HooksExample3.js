import {useState} from "react";

const HooksExample3 = ()=>{


    const [classname,setClassName]=useState("");
  

    return(
<>

            <h1>My Class :  {classname}</h1>
            <button onClick={()=>{setClassName("BCA")}}>BCA </button>
            <button onClick={()=>{setClassName("Msc")}}>Msc</button>
            <button onClick={()=>{setClassName("Phd")}}>Phd </button>
            <button onClick={()=>{setClassName("MCA")}}>MCA </button>



</>

        
    );

}

export default HooksExample3;