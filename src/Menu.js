import { Link } from "react-router-dom";
const Menu=()=>{

    return(

        <>
        


        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >NextIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
              <Link to="/Home" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
              <Link to="/About" class="nav-link active" >About</Link>
        </li>
        <li class="nav-item">
              <Link to="/Contact" class="nav-link active" >Contact</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
   




        
        
        </>
    );

}

export default Menu;