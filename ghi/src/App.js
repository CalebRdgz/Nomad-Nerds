import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserFavorites from './UserFavorites';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    };
    this.loadFavorites = this.loadFavorites.bind(this);
  }
  async componentDidMount() {
    // this.loadFavorites()
  }

  // async loadUsers() {
  //   const response = await fetch("http://localhost:8002/user/");
  //   if (response.ok) {
  //     const data = await response.json();
  //     this.setState({users: data.users});
  //   }
  // }

  async loadFavorites() {(console.log('ok'))
    // const response = await fetch("http://localhost:8001/user/favorites/");
    // if (response.ok) {
    //   const data = await response.json();
    //   this.setState({favorites: data.favorites});
    // }
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
            <Route path="favorites" element={<UserFavorites favorites={this.state.favorites}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;