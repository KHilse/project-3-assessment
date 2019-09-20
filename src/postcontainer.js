import React from 'react';
import { MIN_USER_ID, MAX_USER_ID } from './constants';
import UserPost from './userpost';
import Nav from './nav';
import Axios from 'axios';

class PostContainer extends React.Component {
    state = {
        userId: MIN_USER_ID,
        userPosts: []
    }

    componentDidMount() {
        this.updatePosts(MIN_USER_ID);
    }

    async updatePosts(id) {
        Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(posts => {
            this.setState({
                userPosts: posts.data
            })
        })
        .catch(err => {
            console.log('ERROR: couldn\'t retrieve post data', err);
        })
    }

    downButtonClicked(e) {
        let newId = this.state.userId;
        if (newId <= MIN_USER_ID) {
            newId = MAX_USER_ID;
        } else {
            newId--;
        }
        this.setState({
            userId: newId
        })
        this.updatePosts(newId);
    }

    upButtonClicked(e) {
        let newId = this.state.userId;
        if (this.state.userId >= MAX_USER_ID) {
            newId = 1;
        } else {
            newId++
        }
        this.setState({
            userId: newId
        })
       this.updatePosts(newId);
    }


    render() {
    return (
        <div className="App">
            <h1>Cycle through users:</h1>
            <Nav downButtonClicked={this.downButtonClicked.bind(this)} upButtonClicked={this.upButtonClicked.bind(this)} />
            {this.state.userPosts.map((post, i) => {
            return <UserPost key={i} userId={this.state.userId} title={post.title} body={post.body} />
            })}
        </div>
    )
    }
}

export default PostContainer;