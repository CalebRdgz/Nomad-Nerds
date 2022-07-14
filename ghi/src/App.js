import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
<<<<<<< HEAD
import Login from './Login';
=======
import Login from './LoginForm';
import SignupForm from './SignupForm'



>>>>>>> 6bb570424f30504b4df19b8ce82f26a98c5def9c
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      users: [],
      favorites: [],
    };
    this.loadUsers = this.loadUsers.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
  }
  async componentDidMount() {
    this.loadUsers()
    this.loadFavorites()
  }
  async loadUsers() {
    const response = await fetch("http://localhost:8002/user");
    if (response.ok) {
      const data = await response.json();
      this.setState({users: data.users});
    }
  }
=======
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

>>>>>>> 6bb570424f30504b4df19b8ce82f26a98c5def9c
  async loadFavorites() {
    const response = await fetch("http://localhost:8002/user/favorites/");
    if (response.ok) {
      const data = await response.json();
      this.setState({favorites: data.favorites});
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 6bb570424f30504b4df19b8ce82f26a98c5def9c
  render() {
    return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
=======
          <Route path="user">
            <Route path="" />
            <Route path="signup" element={<SignupForm />} />
            {/* <Route path="login" element={<LoginForm />} />
            <Route path="favorites" element={<UserFavorites />} /> */}
          </Route>
>>>>>>> 6bb570424f30504b4df19b8ce82f26a98c5def9c
        </Routes>
      </BrowserRouter>
    )
  }
}
<<<<<<< HEAD
=======

>>>>>>> 6bb570424f30504b4df19b8ce82f26a98c5def9c
export default App;