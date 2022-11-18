import React ,{useState} from "react";

const FormHandling3 = ()=>{

    const [details,setDetails] = useState({
        name:"",
        email:"",
        password:"",
        address:""
    })


    const handleChange = (e) => {

        // console.log(e.target.name);
        // const name = e.target.name;
        // const value = e.target.value;

        const {name,value} = e.target;
        setDetails((prev)=>{
            return {...prev,[name]: value}
        })

    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(details);
    };

    // console.log(details);
   

    return(

        <>
        
            <form onSubmit={handleSubmit}>

                <h3>Name : </h3> <input type="text" name="name" onChange={handleChange} />
                <h3>Email : </h3> <input type="email" name="email" onChange={handleChange} />
                <h3>Password : </h3> <input type="password" name="password" onChange={handleChange} />
                <h3>Address : </h3> <textarea name="address" onChange={handleChange} ></textarea>
                <button type="submit" >Submit Form</button>

            </form>
        
        
        
        </>

    );

};

export default FormHandling3;