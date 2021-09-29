import React from 'react';

class Follower extends React.Component {
    componentDidMount() {
        console.log(`Follower ${this.props.followers.login}: Component Mounted`)
    }

    render() {
        const { follower } = this.props;
        console.log(`Follower ${this.props.followers.login}: Renders DOM`)
        return (
            <div key={follower.id} className='follower'>
                <p>{follower.login}</p>
            </div>
        )
    }
}

export default Follower;