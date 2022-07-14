import { useState } from 'react';


export default function SignUpForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
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

    const handlePassword1 = (e) => {
        setPassword1(e.target.value);
        setSubmitted(false);
    };

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password1 === '' || password2 === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            setUsername("");
            setEmail("");
            setPassword1("");
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
            <label className="label">Username</label>
            <input 
                onChange={handleUsername} 
                className="form-control" 
                id="username" 
                name="username" 
                value={username} 
                required type="text" 
            />
          </div>
          <div className="form-floating mb-3">
            <label className="label">Email</label>
            <input 
                onChange={handleEmail} 
                className="form-control"
                id="email"
                name="email" 
                value={email} 
                required type="email" 
            />
          </div>
          <div className="form-floating mb-3">
            <label className="label">Password</label>
            <input 
                onChange={handlePassword1} 
                className="form-control"
                id="password1"
                name="password1" 
                value={password1} 
                required type="password1" />
          </div>
          <div className="form-floating mb-3">
            <label className="label">Password</label>
            <input 
                onChange={handlePassword2} 
                className="form-control" 
                name="password2" 
                value={password2} 
                required type="password2" 
            />
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