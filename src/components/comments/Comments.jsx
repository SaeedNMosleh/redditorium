import React from 'react'
import './comments.css'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Comment = ({ comment, level = 0 }) => {
  return (
    <div className='comments__comment_container' style={{ marginLeft: `${level * 5}px` }}>
      <p>{comment.author} : {comment.body}</p>
      {comment.replies && comment.replies.data.children.length > 0 && (
        <div className='comments__replies'>
          {comment.replies.data.children.map((child, index) => (
            <Comment key={index} comment={child.data} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


const Comments = () => {

  const [comments, setComments] = useState([]);

  const permalink = useSelector((state) => state.comment.commentsLink);
  const API_ROOT = 'https://www.reddit.com';
  
  const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };

  useEffect(() => {    
      const fetchPostComments = async () => {
        const commentsRes = await getPostComments(permalink);
        setComments(commentsRes);
        console.log(commentsRes);
      };
      fetchPostComments();    
    }, [permalink]);

    return (
      <div className='comments__container section__padding'>
        {comments.length > 0 ? (
          comments.slice(1).map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    );
};


export default Comments