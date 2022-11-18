import { useState } from "react";

const FormHandling4 = ()=>{

const [fullname,setFullname]=useState({});

const handleInput=(e)=>{

    let name=e.target.name;
    let value=e.target.value;
    setFullname({...fullname,[name]:value});
    console.log(fullname);

}

const handleSubmit = (e) =>{
e.preventDefault();
document.getElementById("mydata").innerHTML="My name is "+fullname.fname + " "+fullname.lname + "  from Bhopal" ;



}


return(

<>
    <form onSubmit={handleSubmit}>
        Enter First Name : <input type="text" name="fname"
        value={fullname.fname}
        onChange={handleInput} />

        Enter Second Name : <input type="text" name="lname"
        value={fullname.lname}
        onChange={handleInput} />
        <input type="submit" value="Data Save" />
    </form>

        <h1>My name {fullname.fname} {fullname.lname} </h1>
        <h1 id ="mydata">My Submit Data </h1>


</>

)

}

export default FormHandling4;