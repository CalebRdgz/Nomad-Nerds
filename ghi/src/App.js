<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Test from './test_file';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test /> 
      </header>
    </div>
  );
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    };
    this.loadFavorites = this.loadFavorites.bind(this);
  }
  async componentDidMount() {
    this.loadFavorites()
  }

  // async loadUsers() {
  //   const response = await fetch("http://localhost:8002/user/");
  //   if (response.ok) {
  //     const data = await response.json();
  //     this.setState({users: data.users});
  //   }
  // }

  async loadFavorites() {
    const response = await fetch("http://localhost:8002/user/favorites/");
    if (response.ok) {
      const data = await response.json();
      this.setState({favorites: data.favorites});
    }
  }
  render() {
    return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="user">
            <Route path="signup" element={<SignupForm />} />
            <Route path="login" element={<LoginForm />} />
            {/* <Route path="favorites" element={<UserFavorites />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
>>>>>>> main
}
export default App;