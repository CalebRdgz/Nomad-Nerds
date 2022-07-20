import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import { useToken } from './users/Auth';
import Footer from './Footer';
import Login from './users/Login';
import SignupForm from './users/SignupForm';
import UserFavorites from './UserFavorites';
import Logout from './users/Logout';
import { AuthProvider } from './users/Auth';



function App () {
  const [token, login, logout, signup, user] = useToken();
  const [userName, setUserName] = useState('');

  if (user && !userName) {
    setUserName(user.username)
  }

  const navigate = useNavigate();

    return (
      <AuthProvider>
      <Nav token={token}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="user">
            <Route path="signup" element={<SignupForm token={token} signup={signup} setUN={setUserName}/>} />
            <Route path="login" element={<Login token={token} login={login} setUN={setUserName}/>} />
            <Route path="logout" element={<Logout logout={logout}/>} />
            {/* <Route path="favorites" element={<UserFavorites favorites={this.state.favorites}/>} /> */}
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
      
    );
}
export default App;