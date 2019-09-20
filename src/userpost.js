import React from 'react';

// props: looking for user object containing userId id, title, body
const UserPost = (props) => {
    let {userId, title, body} = props;

    return (
        <div className='post'>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}

export default UserPost;