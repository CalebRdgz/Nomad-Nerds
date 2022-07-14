import { useState } from 'react';


export default function SignUpForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
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
      <div className="shadow p-4 mt-4" />
        <h1>Sign up</h1>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        <form id="signup">
          <div className="form-floating mb-3">
            <label className="label">Name</label>
            <input onChange={handleUsername} className="form-control" value={username} required type="text" />
          </div>
          <div className="form-floating mb-3">
            <label className="label">Email</label>
            <input onChange={handleEmail} className="form-control" value={email} required type="email" />
          </div>
          <div className="form-floating mb-3">
            <label className="label">Password</label>
            <input onChange={handlePassword} className="form-control" value={password} required type="password" />
          </div>
            <button onClick={handleSubmit} className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
    </div>
    );
}