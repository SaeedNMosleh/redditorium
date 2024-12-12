import React from 'react'
import './topic.css'

function Topic({topic}) {
  return (
    <div className='topic__container section__padding' >
       <p>Topic {topic}</p>
    </div>
  )
}

export default Topic