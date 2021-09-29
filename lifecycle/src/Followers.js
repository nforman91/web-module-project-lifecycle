import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class Followers extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/nforman91/followers')
            .then(res => {
                this.setState({
                    followers: res.data
                })
            })
    }

    render() {
        console.log('These are the props', this.props)
        return (
            <div className='followers'>
                {/* <p>{this.state.followers.map(followers => (
                    <Follower key={followers.id} followers={followers}/>
                ))}</p> */}
            </div>
        )
    }
}

export default Followers;