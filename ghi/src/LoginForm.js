import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      csrf: "",
      username: "",
      password: "",
      error: "",
      isAuthenticated: false,
    };
  }

  componentDidMount = () => {
    this.getSession();
  }

  getCSRF = () => {
    fetch("http://localhost:8001/user/csrf/", {
      credentials: "include",
    })
    .then((res) => {
      let csrfToken = res.headers.get("X-CSRFToken");
      this.setState({csrf: csrfToken});
      console.log(csrfToken);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getSession = () => {
    fetch("http://localhost:8001/user/session/", {
      credentials: "include",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.isAuthenticated) {
        this.setState({isAuthenticated: true});
      } else {
        this.setState({isAuthenticated: false});
        this.getCSRF();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  whoami = () => {
    fetch("http://localhost:8001/user/whoami/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("You are logged in as: " + data.username);
      return (<p>You are logged in as: + {data.username}</p>)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleUserNameChange = (event) => {
    this.setState({username: event.target.value});
  }

  isResponseOk(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  login = (event) => {
    event.preventDefault();
    fetch("http://localhost:8001/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": this.state.csrf,
      },
      credentials: "include",
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
    })
    .then(this.isResponseOk)
    .then((data) => {
      console.log(data);
      this.setState({isAuthenticated: true, username: "", password: "", error: ""});
    })
    .catch((err) => {
      console.log(err);
      this.setState({error: "Wrong username or password."});
    });
  }

  logout = () => {
    fetch("http://localhost:8001/user/logout", {
      credentials: "include",
    })
    .then(this.isResponseOk)
    .then((data) => {
      console.log(data);
      this.setState({isAuthenticated: false});
      this.getCSRF();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className="container mt-3">
          <h1>Login</h1>
          <br />
          <h2>Login</h2>
          <form onSubmit={this.login}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleUserNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
              <div>
                {this.state.error &&
                  <small className="text-danger">
                    {this.state.error}
                  </small>
                }
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      );
    }
    return (
      <div className="container mt-3">
        <h1>Nomad-Nerds</h1>
        <p>You are logged in!</p>
        {/* <button className="btn btn-primary mr-2" onClick={this.whoami}>WhoAmI</button> */}
        <button className="btn btn-danger" onClick={this.logout}>Log out</button>
      </div>
    )
  }
}

export default LoginForm;









// import React, { useState, useEffect } from 'react';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState(false);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     if (localStorage.getItem('token') !== null) {
//       window.location.replace('http://localhost:3000/dashboard');
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const user = {
//       username: username,
//       password: password
//     };

//     fetch('http://127.0.0.1:8000/users/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.key) {
//           localStorage.clear();
//           localStorage.setItem('token', data.key);
//           window.location.replace('http://localhost:3000/dashboard');
//         } else {
//           setUsername('');
//           setPassword('');
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };

//   return (
//     <div className="row">
//     <div className="offset-3 col-6">
//       <div className="shadow p-4 mt-4">
//       {loading === false && <h1>Login</h1>}
//       {errors === true && <h2>Cannot log in with provided credentials</h2>}
//       {loading === false && (
//         <form onSubmit={handleSubmit}>
//           <div className="form-floating mb-3">
//           <label htmlFor='username'>Username</label>
//           <input
//             className="form-control"
//             name='username'
//             type='username'
//             value={username}
//             required
//             onChange={e => setUsername(e.target.value)}
//           />{' '}
//           </div>
//           <div className="form-floating mb-3">
//           <label htmlFor='password'>Password</label>
//           <input
//             className="form-control"
//             name='password'
//             type='password'
//             value={password}
//             required
//             onChange={e => setPassword(e.target.value)}
//           />{' '}
//           </div>
//           <button 
//                 onClick={handleSubmit} 
//                 className="btn btn-primary" 
//                 type="submit">Submit
//             </button>
//         </form>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;