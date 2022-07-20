import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import { useToken } from './users/Auth';
import Footer from './Footer';
import LoginForm from './users/LoginForm';
import SignupForm from './users/SignupForm';
import UserFavorites from './UserFavorites';
import LogoutForm from './users/LogoutForm';


function App () {
  const [token, login, logout, signup, user] = useToken();
  const [userName, setUserName] = useState('');

  if (user && !userName) {
    setUserName(user.username)
  }

    return (
      <BrowserRouter>
      <Nav token={token}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="user">
            <Route path="signup" element={<SignupForm token={token} signup={signup} setUN={setUserName}/>} />
            <Route path="login" element={<LoginForm token={token} login={login} setUN={setUserName}/>} />
            <Route path="logout" element={<LogoutForm logout={logout}/>} />
            {/* <Route path="favorites" element={<UserFavorites favorites={this.state.favorites}/>} /> */}
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    );
}
export default App;