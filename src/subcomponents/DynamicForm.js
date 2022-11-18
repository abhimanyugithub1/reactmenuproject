import {useState} from "react";

const DynamicForm =()=>{

const [formFields,setFormFields]=useState([
    {name:"",age:""}
])


const handleFormChange = (event,index) =>{
    console.log(index,event.target.name )
}


    return(

        <>
            <div className="App">
                {formFields.map((form,index)=>{
                    return(
                        <div>
                            <input
                                name="name"
                                placeholder="Name" 
                                onChange={event =>handleFormChange(event,index)}
                                value={form.name}
                                />

                            <input 
                              name="age"
                              placeholder="Age"
                              />
                         </div> 
                    )

                })}

                <button>Add More..</button>
                <br />
                <button>Submit</button>
            </div>
        </>
    );

}

export default DynamicForm;