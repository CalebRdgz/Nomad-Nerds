import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard');
    } else {
      setLoading(false);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    fetch('http://localhost:8001/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/dashboard');
        } else {
          setUsername('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
      {loading === false && <h1>Login</h1>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
          <input
            placeholder="username"
            className="form-control"
            name='username'
            required type='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label htmlFor='username'>Username</label>
          {' '}
          </div>
          <div className="form-floating mb-3">
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="username"
            className="form-control"
            name='password'
            required type='password'
            value={password}
          />
            <label htmlFor='password'>Password</label>
          {' '}
          </div>
          <button 
                onClick={handleSubmit} 
                className="btn btn-primary" 
                type="submit">Submit
            </button>
        </form>
      )}
    </div>
    </div>
    </div>
  );
};

export default LoginForm;