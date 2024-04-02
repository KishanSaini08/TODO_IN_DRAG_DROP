// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import firebase from './firebase.js';
// import firebase from "../firebaseconfig.js";
// import "./signup.css"

// const Login = () => {
//     const[email ,setEmail] = useState("")
//     const[password ,setPassword] = useState("")



//      const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await firebase.auth().signInWithEmailAndPassword(email, password);
//       if (user) {
//         alert("Login successfully");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };





//   return (
//     <>
//     <div className="main_contanier">
//         <div className="header">
//             <h2>SignUp</h2>
//         </div>
//         <div className="box">
//             <input type="text" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <div className="box">
//             <input type="text" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
//         </div>
//         <p>Already have an account <Link to={"/"}>Login</Link></p>
//         <button onClick={submit}>SignUp</button>
//     </div>
//     </>
      
//   )
// }

// export default Login



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebaseconfig.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/signup.css";

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (user) {
                toast.success("Login successfully");
                navigate('/home'); // Navigate to the home page upon successful login
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div className="main_contanier">
                <ToastContainer /> {/* ToastContainer component to render the toasts */}
                <div className="header">
                    <h2>Login</h2>
                </div>
                <div className="box">
                    <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="box">
                    <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>Don't have an account? <Link to={"/"}>Sign Up</Link></p>
                <button onClick={submit}>Login</button>
            </div>
        </>
    )
}

export default Login;

