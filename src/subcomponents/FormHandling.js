import { useState } from "react";


const FormHandling =()=>
{


const [name,setName]=useState("");
const [city,setCity]=useState("");

function getName(e){

    setName(e.target.value)
}

function getCity(e){

    setCity(e.target.value)
}


    return(
<>

Enter Name <input type="text" value={name} onChange={getName} />

<br />
Enter Name <input type="text" value={city} onChange={getCity} />
<br />

<input type="submit" value="save"/>


</>



    );


}

export default FormHandling;