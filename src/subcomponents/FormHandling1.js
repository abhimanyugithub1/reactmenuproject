import { useState } from "react";


const FormHandling1 =()=>
{


const [name,setName]=useState("");
const [city,setCity]=useState("");


    return(
<>

Enter Name <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

<br />
Enter Name <input type="text" value={city} onChange={(e)=>{setCity(e.target.city)}} />
<br />

<input type="submit" value="save"/>


</>



    );


}

export default FormHandling1;