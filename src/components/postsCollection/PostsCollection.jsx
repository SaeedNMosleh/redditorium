// Code: PostsCollection Component
import React , {useState, useEffect} from 'react'
import './postsCollection.css'
import { useSelector , useDispatch} from 'react-redux';
import Post from '../post/Post';

import { setCommentsLink } from '../../slices/commentSlice';



const PostsCollection = () => {
  const subredditName = useSelector((state) => state.post.subredditName);
  const dispatch = useDispatch();
  const [subredditPosts, setSubredditPosts] = useState([]);

  
  const API_ROOT = 'https://www.reddit.com';
  
  const getSubredditPosts = async (subreddit) => {
   const response = await fetch(`${API_ROOT}/r/${subreddit}.json`);
   const json = await response.json();
   return json.data.children.map((post) => post.data);
  };
  
  useEffect(() => {
    const fetchSubredditPosts = async () => {
      const data = await getSubredditPosts(subredditName);
      setSubredditPosts(data);
    };
    fetchSubredditPosts();    
  }, [subredditName]);
 


  return (
    <div className='postscollection__container'>
      {subredditPosts.length > 0 && subredditPosts.map((eachpost, index) => (
        <Post key={index} subreddit_name_prefixed={eachpost.subreddit_name_prefixed} 
          title={eachpost.title} selftext={eachpost.selftext} num_comments={eachpost.num_comments} 
          ups={eachpost.ups} downs={eachpost.downs} 
          onClick={()=>
            dispatch(setCommentsLink(eachpost.permalink))
          }/>
      ))} 
    </div>
  )
}

export default PostsCollection

