import React, {useState} from "react";


const FormHandling2 = ()=>{
    const [fullName,setFullName] = useState({fname: "",lname: "",});


    const inputEvent = (event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        // setName(event.target.value);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue)=>{
            // console.log(preValue);

            if(name === "fName"){
                return{
                    fname: value,
                    lname: preValue.lName,
                };
                
            }else if (name === "lName"){

                return{
                    fname: preValue.fName,
                    lname: value,
                }
                
            };

        });
    };


    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    };



    return(

        <>

            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname} </h1>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="fName"
                            onChange={inputEvent}
                            value={fullName.fname}
                            />
                            <br/>
                            <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            name="lName"
                            onChange={inputEvent}
                            value={fullName.lname}
                            />

                            <button type="submit">Submit Me</button>

                    </div>

                </form>
            </div>

        </>
    )

}


export default FormHandling2;