import { useState } from "react";
import "./search.css";
import Table from "./Table";
import {Users} from "./Users";


const Search = ()=>{

    const [query,setQuery]=useState("");
    // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("ra")));



    const keys = ["first_name","last_name","email"]

    console.log(Users[0]["email"])




    const search = (data) => {
        return data.filter((item)=>
             item.first_name.toLowerCase().includes(query) ||
             item.last_name.toLowerCase().includes(query)||
             item.email.toLowerCase().includes(query)
        );
    };



    return(

        <div className="search">
            <input type="text"
             placeholder="Search..."
              className="search"
              onChange={(e)=>setQuery(e.target.value)} 
              
            />

           <Table data={search(Users)}/>

        </div>

    );
}

export default Search;







{/* <ul className="list">
{Users.filter((user)=>
    user.first_name.toLowerCase().includes(query)
    ).map((user)=>(
      <li key={user.id} className="listItem">
        {user.first_name}
    </li>

))}

</ul> */}