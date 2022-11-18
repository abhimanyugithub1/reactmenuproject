import CyberomStu from "./test/CyberomStu";
import Collegeview1 from "./test/CollegeView1";
const mydata= CybromStu.map((key)=> <Collegeview rollnum={key.rollno}
 stuname={key.name} stuaddres={key.addres}  stufees={key.fees} stugrade={key.grade}/>) 
 const App1=()=>  
 { 
  return ( 
    <>

<div class ="row">
{mydata}
</div>
</>
 );
  }   
export default App1;