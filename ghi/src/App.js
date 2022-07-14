import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import Login from './Login';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;