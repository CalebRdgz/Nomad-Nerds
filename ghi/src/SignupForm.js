import { useState } from 'react';


export default function SignUpForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '' || password2 === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            setUsername("");
            setEmail("");
            setPassword("");
            setPassword2("");
        }
    };

    const successMessage = () => {
        return (
            <div className="success" style={{ display: submitted ? '' : 'none', }}>
                <h1>User {username} successfully registered!</h1>
            </div>
        );
    };


    const errorMessage = () => {
        return (
            <div className="error" style={{ display: error ? '' : 'none', }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Sign up</h1>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        <form id="signup">
          <div className="form-floating mb-3">
            <input 
                onChange={handleUsername} 
                className="form-control" 
                id="username" 
                name="username" 
                value={username} 
                required type="text" 
            />
            <label className="label">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input 
                onChange={handleEmail} 
                className="form-control"
                id="email"
                name="email" 
                value={email} 
                required type="email" 
            />
            <label className="label">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input 
                onChange={handlePassword} 
                className="form-control"
                id="password"
                name="password" 
                value={password} 
                required type="password" 
            />
            <label className="password">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input 
                onChange={handlePassword2} 
                className="form-control" 
                name="password2" 
                value={password2} 
                required type="password2" 
            />
            <label className="label">Password</label>
          </div>
            <button 
                onClick={handleSubmit} 
                className="btn btn-primary" 
                type="submit">Submit
            </button>
        </form>
    </div>
    </div>
    </div>
    );
}