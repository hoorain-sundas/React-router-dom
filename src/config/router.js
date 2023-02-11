import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUp from '../Screens/signup';
import Login from '../Screens/login';
import Home from '../Screens/home';


function AppRouter(){
    return(
        <>
        <BrowserRouter>
        <nav>
        <div className="text-center mt-4" >
            <ul className="list-style-none">
                <li className='d-inline m-5 fs-5 p-2'><Link to="home">Home</Link></li>
                <li className='d-inline m-5 fs-5 p-2'><Link to="login">Login</Link></li>

            </ul>
        </div>    
        </nav>
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;