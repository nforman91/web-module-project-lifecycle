import React from 'react';
import axios from 'axios';
import './App.css';
import Followers from './Followers';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    console.log('App: Component Mounts')
    axios.get('https://api.github.com/users/nforman91')
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })

    axios.get('https://api.github.com/users/nforman91/followers')
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
  }

  render() {
    console.log('App: Renders DOM', `${this.state.followers}`)
    return (
      <div className="card-container">
        <h2>GitHub Display</h2>
        <div className="card">
          <h3>Name: {this.state.user.name}</h3>
          <p>Bio: {this.state.user.bio}</p>
          <p>Location: {this.state.user.location}</p>
          <img width={50} src={this.state.user.avatar_url} />

          <p>List of Followers: </p>
          <ul>
            {this.state.followers.map(follower => {
              return <li>{follower.login}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
