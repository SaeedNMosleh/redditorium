import React from 'react'
import './post.css'

const Post = ({ subreddit_name_prefixed, title, selftext, num_comments, ups, downs, onClick}) => {
    return (
      <div className='post__container section__padding' onClick={onClick}>
        <p className='post__container-header'>{subreddit_name_prefixed}</p>
        <p className='post__container-title'>{title}</p>
        <p className='post__container-description'>{selftext}</p>
        <p className='post__container-comments'>Comments: {num_comments}</p>
        <p className='post__container-votes'>Upvotes: {ups} | Downvotes: {downs}</p>
      </div>
    )
  }
  
  export default Post