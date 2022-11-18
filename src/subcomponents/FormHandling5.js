import React from "react";
import { useState } from "react";


const FormHandling5=()=>{


    const[setData,updateData]=useState({ });

    const handleInput=(e)=>{

        const name=e.target.name;
        const values=e.target.value;
        
        updateData({...setData,[name]:values});
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('name').innerHTML=setData.nm;
        document.getElementById('rollno').innerHTML=setData.rno;
        document.getElementById('course').innerHTML=setData.course;
        document.getElementById('fees').innerHTML=setData.fees;


        
    }



    return(

        <>
            <form onSubmit={handleSubmit}>
                Enter Name <input type="text" name="nm" value={setData.name} onChange={handleInput} /><br></br>
                Enter Roll No <input type="text" name="rno" value={setData.rollno} onChange={handleInput}/><br></br>
                Enter Course <input type="text" name="course" value={setData.course} onChange={handleInput} /><br></br>
                Enter Fees <input type="text" name="fees" value={setData.fees} onChange={handleInput} /><br></br>
                <input type="submit" value="Save" />
            </form>    


            <table border="1" align="center" width="500" bgcolor="pink">

            <tr>
                <td >Name</td>
               
                <td >Roll No</td>
               
                <td >Course</td>
                
                <td >Fees</td>
               
            </tr>

            <tr>
            <td id="name"></td>
            <td id="rollno"></td>
            <td id="course"></td>
            <td id="fees"></td>
            </tr>
            

            </table>

        </>
    );
}



export default FormHandling5;