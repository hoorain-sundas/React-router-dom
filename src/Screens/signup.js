import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp(){

    return (
    <div className="text-center mt-5 shadow rounded container pt-3 pb-3">
        <h1>Sign Up</h1> <br></br>
    <form action="">
       <div className="p-2 m-2 fs-4">
        <input type="text" placeholder="First Name" name="firstname" id="firstname" />
       </div>

       <div className="p-2 m-2 fs-4"> 
        <input type="text" placeholder="Last Name" name="lastname" id="lastname" />
       </div>

       <div className="p-2 m-2 fs-4">
        <input type="email" placeholder="Email" name="email" id="email" />
       </div>
       
       <div className="p-2 m-2 fs-4">
        <input type="password" placeholder="Password" name="password" id="password" />
       </div>
       <br></br>
       <button className="p-2 ps-4 pe-4 fs-5 m-2 bg-success border-0 rounded-pill text-center" type="submit">Sign Up</button>
    </form> 
    </div>)
}  
 // <TextField id="outlined-basic" label="Enter first Name" variant="outlined" />
 //<TextField id="outlined-basic" label="Enter Last Name" variant="outlined" />
 // <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
 // <TextField id="outlined-basic" label="Enter Password" variant="outlined" />

 // <Button variant="contained">Sign Up</Button>  
export default SignUp;  