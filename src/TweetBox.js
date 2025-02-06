import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

db.collection('posts').add({
    displayName : 'Anand Kumar',
    username: 'anand',
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar: "https://i.pinimg.com/564x/82/87/03/82870345cd80bd1bb4a64bf2fcd46dc6.jpg"
});

    setTweetMessage("");
    setTweetImage("");
    }

  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar src='https://i.pinimg.com/564x/82/87/03/82870345cd80bd1bb4a64bf2fcd46dc6.jpg'></Avatar>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type='text'></input>
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className='tweetBox_imageInput'
                placeholder='Optional: Enter image URL'
                type='text'
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox