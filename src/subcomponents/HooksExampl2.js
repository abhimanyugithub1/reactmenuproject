import {useState} from "react";

const HooksExample2 = ()=>{
    const [color,setColor]=useState("");
      return(
<>

            <h1>My Favourate color :  {color}</h1>
            <button onClick={()=>{setColor("Red")}}>Res </button>
            <button onClick={()=>{setColor("Green")}}>Green </button>
            <button onClick={()=>{setColor("Yellow")}}>Yellow </button>
            <button onClick={()=>{setColor("Pink")}}>Pink </button>

</>
        
    );

}

export default HooksExample2;