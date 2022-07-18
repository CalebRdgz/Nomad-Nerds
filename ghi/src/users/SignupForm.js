import React, { useState } from 'react';
import { Navigate, NavLink } from "react-router-dom";


function SignupForm(props) {
    const { token, signup } = props;
    const [username, setUsername] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  
  if (token) {
    return <Navigate to='/' />;
  }
  var handleUserName = function (e) {
    const value = e.target.value;
    setUsername(value)
    props.setUN(value)
  }
  return (
    <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Signup</h1>
                  <form>
                    <div className="form-floating mb-3">
                      <input onChange={handleUserName} 
                      placeholder="Username" 
                      required type="text" 
                      name="username" 
                      id="username" 
                      className="form-control" 
                      value={username}
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={e => setPassword(e.target.value)} 
                      placeholder="Password" 
                      required type="password" 
                      name="password" 
                      id="password" 
                      className="form-control" 
                      value={password}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={e => setPassword(e.target.value)} 
                      placeholder="First Name" 
                      required type="text" 
                      name="first_name" 
                      id="first_name" 
                      className="form-control" 
                      value={first_name}
                      />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={e => setLastName(e.target.value)} 
                      placeholder="Last Name" 
                      required type="text" 
                      name="last_name" 
                      id="last_name" 
                      className="form-control" 
                      value={last_name}
                      />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={e => setEmail(e.target.value)} 
                      placeholder="Email" 
                      required type="email" 
                      name="email" 
                      id="email" 
                      className="form-control" 
                      value={password}
                      />
                      <label htmlFor="Email">Email</label>
                    </div>
                      <button className="btn btn-primary" onClick={() => 
                        signup(username, password, first_name, last_name, email)} type="button">Login</button>
                  </form>
                </div>
            </div>
        </div>
  );
}

export default SignupForm;




// export default function SignUpForm() {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [error, setError] = useState(false);
    
//     useEffect

//     const handleUsername = (e) => {
//         setUsername(e.target.value);
//         setSubmitted(false);
//     };


//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         setSubmitted(false);
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (username === '' || password === '' ) {
//             setError(true);
//         } else {
//             setSubmitted(true);
//             setError(false);
//             setUsername("");
//             setPassword("");
//         }
//     };

//     const successMessage = () => {
//         return (
//             <div className="success" style={{ display: submitted ? '' : 'none', }}>
//                 <h1>User {username} successfully registered!</h1>
//             </div>
//         );
//     };


//     const errorMessage = () => {
//         return (
//             <div className="error" style={{ display: error ? '' : 'none', }}>
//                 <h1>Please enter all the fields</h1>
//             </div>
//         );
//     };

// return (
//     <div className="row">
//     <div className="offset-3 col-6">
//       <div className="shadow p-4 mt-4">
//         <h1>Sign up</h1>
//         <div className="messages">
//             {errorMessage()}
//             {successMessage()}
//         </div>
//         <form id="signup">
//           <div className="form-floating mb-3">
//             <input 
//                 onChange={handleUsername} 
//                 className="form-control" 
//                 id="username" 
//                 name="username" 
//                 value={username} 
//                 required type="text" 
//             />
//             <label className="label">Username</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input 
//                 onChange={handleEmail} 
//                 className="form-control"
//                 id="email"
//                 name="email" 
//                 value={email} 
//                 required type="email" 
//             />
//             <label className="label">Email</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input 
//                 onChange={handlePassword} 
//                 className="form-control"
//                 id="password"
//                 name="password" 
//                 value={password} 
//                 required type="password" 
//             />
//             <label className="password">Password</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input 
//                 onChange={handlePassword2} 
//                 className="form-control" 
//                 name="password2" 
//                 value={password2} 
//                 required type="password2" 
//             />
//             <label className="label">Password</label>
//           </div>
//             <button 
//                 onClick={handleSubmit} 
//                 className="btn btn-primary" 
//                 type="submit">Submit
//             </button>
//         </form>
//     </div>
//     </div>
//     </div>
//     );
// }