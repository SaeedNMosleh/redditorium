import React from 'react';
import Topic from '../topic/Topic';

import './topicsCollection.css';

function TopicsCollection() {
  
  return (
    <div className='topicscollections__container section__padding'>
      <Topic topic="Subreddit_1"/>
      <Topic topic="Subreddit_2"/>
      <Topic topic="Subreddit_3"/>           
    </div>
  )
}

export default TopicsCollection