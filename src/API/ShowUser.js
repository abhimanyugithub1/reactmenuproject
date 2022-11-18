import React,{useEffect,useState} from 'react'


const User=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{

        fetch("http://localhost:8080/api/users/").then((result)=>{
        result.json().then((resp)=>{
            //console.log("result",resp)
            setData(resp)
        })
    })

    },[])
    console.warn(data)

    return(

        <>
            <h1>Get API Call Show User Details  </h1>
        
        <table border="1">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
            </tr>
            {
                data.map((item)=>
                <tr>
                    <td>item.id</td>
                    <td>item.name</td>
                    <td>item.email</td>
                    <td>item.password</td>
                </tr>
                )
            }
        </table>

        
        </>


    );


}

export default User;