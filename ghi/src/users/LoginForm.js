import React, { useState } from "react";
import { Navigate } from "react-router-dom";


function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = props;


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
                <h1>Login</h1>
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
                      <button className="btn btn-primary" onClick={() => login(username, password)} type='button'>Login</button>
                  </form>
                </div>
            </div>
        </div>
  );
}

export default LoginForm;
