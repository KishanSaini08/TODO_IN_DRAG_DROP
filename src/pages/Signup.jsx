

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import firebase from '../firebaseconfig.js';
// import "./signup.css"

// const Signup = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const postUserData = async (event) => {
//     event.preventDefault();

//     const { email, password, name } = userData;

//     try {
//       const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       if (user) {
//         const res = await fetch("https://login-and-sing-up-3f02c-default-rtdb.firebaseio.com/userDataRecord.json", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password
//           })
//         });

//         if (res.ok) {
//           alert("Account Created Successfully! Please Log In.");
//         } else {
//           alert("Failed to store data. Please try again.");
//         }
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <>
//       <div className="main_contanier">
//         <div className="header">
//           <h2>SignUp</h2>
//         </div>
//         <div className="box">
//           <input type="text" value={userData.name} placeholder='Username' name="name" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.email} placeholder='Email' name="email" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.password} placeholder='Password' name="password" onChange={handleChange} />
//         </div>
//         <button onClick={postUserData}>SignUp</button>
//         {/* <Link to={'/home'}><button onClick={postUserData}>Sign Up</button></Link> */}
//         <p>Already have an account <Link to={"/login"}>Login</Link></p>
//       </div>
//     </>
//   )
// }

// export default Signup


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import firebase from '../firebaseconfig.js';
// import "./signup.css"

// const Signup = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const postUserData = async (event) => {
//     event.preventDefault();

//     const { email, password, name } = userData;

//     try {
//       const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       if (user) {
//         const res = await fetch("https://login-and-sing-up-3f02c-default-rtdb.firebaseio.com/userDataRecord.json", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password
//           })
//         });

//         if (res.ok) {
//           alert("Account Created Successfully! Please Log In.");
//           navigate('/home'); // Redirect to the home page using useNavigate
//         } else {
//           alert("Failed to store data. Please try again.");
//         }
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <>
//       <div className="main_contanier">
//         <div className="header">
//           <h2>SignUp</h2>
//         </div>
//         <div className="box">
//           <input type="text" value={userData.name} placeholder='Username' name="name" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.email} placeholder='Email' name="email" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.password} placeholder='Password' name="password" onChange={handleChange} />
//         </div>
//         <button onClick={postUserData}>SignUp</button>
//         {/* <Link to={'/home'}><button onClick={postUserData}>Sign Up</button></Link> */}
//         <p>Already have an account <Link to={"/login"}>Login</Link></p>
//       </div>
//     </>
//   )
// }

// export default Signup;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebaseconfig.js';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast notifications
import "../style/signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const postUserData = async (event) => {
    event.preventDefault();

    const { email, password, name } = userData;

    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (user) {
        const res = await fetch("https://login-and-sing-up-3f02c-default-rtdb.firebaseio.com/userDataRecord.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });

        if (res.ok) {
          toast.success("Account Created Successfully! Please Log In.");
          navigate('/home');
        } else {
          toast.error("Failed to store data. Please try again.");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className="main_contanier">
        <ToastContainer /> {/* ToastContainer component to render the toasts */}
        <div className="header">
          <h2>SignUp</h2>
        </div>
        <div className="box">
          <input type="text" value={userData.name} placeholder='Username' name="name" onChange={handleChange} />
        </div>
        <div className="box">
          <input type="text" value={userData.email} placeholder='Email' name="email" onChange={handleChange} />
        </div>
        <div className="box">
          <input type="password" value={userData.password} placeholder='Password' name="password" onChange={handleChange} />
        </div>
        <button onClick={postUserData}>SignUp</button>
        <p>Already have an account <Link to={"/login"}>Login</Link></p>
      </div>
    </>
  )
}

export default Signup;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import firebase from '../firebaseconfig.js';
// import "./signup.css";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const postUserData = async (event) => {
//     event.preventDefault();

//     const { email, password, name } = userData;

//     try {
//       const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       if (user) {
//         const res = await fetch("https://login-and-sing-up-3f02c-default-rtdb.firebaseio.com/userDataRecord.json", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password
//           })
//         });

//         if (res.ok) {
//           toast.success("Account Created Successfully! Please Log In.");
//         } else {
//           toast.error("Failed Please try again.");
//         }
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <>
//       <div className="main_contanier">
//         <div className="header">
//           <h2>SignUp</h2>
//         </div>
//         <div className="box">
//           <input type="text" value={userData.name} placeholder='Username' name="name" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.email} placeholder='Email' name="email" onChange={handleChange} />
//         </div>
//         <div className="box">
//           <input type="text" value={userData.password} placeholder='Password' name="password" onChange={handleChange} />
//         </div>
//         <button onClick={postUserData}>SignUp</button>
//         {/* <Link to={'/home'}><button onClick={postUserData}>Sign Up</button></Link> */}
//         <p>Already have an account <Link to={"/login"}>Login</Link></p>
//       </div>
//     </>
//   )
// }

// export default Signup;
