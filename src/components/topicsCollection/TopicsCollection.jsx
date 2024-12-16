import React, {useEffect, useState} from 'react';
import Topic from '../topic/Topic';

import './topicsCollection.css';

import reddit_logo from '../../assets/reddit-logo.png';

import { useDispatch } from 'react-redux';
import { setPosts } from '../../slices/postSlice';

function TopicsCollection() {

const dispatch = useDispatch();
const [subreddits, setSubreddits] = useState([]);
const [sideVisible, setSideVisible] = useState(false);

const API_ROOT = 'https://www.reddit.com';

const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  console.log(json);
  return json.data.children.map((subreddit) => subreddit.data);
};

useEffect(() => {
  const fetchSubreddits = async () => {
    const data = await getSubreddits();
    setSubreddits(data);
  };
  fetchSubreddits();
}, []);

  
  return (
    <div className={`section__padding ${sideVisible ? 'topicscollections__container_side' : 'topicscollections__container_main'}`}>
      {subreddits.length > 0 && subreddits.map((subreddit, index) => (
        <Topic key={index} name_prefixed={subreddit.display_name_prefixed}
          icon_img={subreddit.icon_img?subreddit.icon_img:reddit_logo} title={subreddit.title} 
          public_description={subreddit.public_description} 
          onClick={()=> {
            dispatch(setPosts({subredditName: subreddit.display_name, posts: []}));
            setSideVisible(true);
            console.log("Clicked:", subreddit.display_name);       
          }}
        /> 
      ))}                
    </div>
  )
}

export default TopicsCollection