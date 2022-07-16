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
                <h1>Sign Up</h1>
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
                        signup(username, password, first_name, last_name, email)} type="button">Sign Up</button>
                  </form>
                </div>
            </div>
        </div>
  );
}

export default SignupForm;