import React from 'react'
import './topic.css'

function Topic({name_prefixed, icon_img, title, public_description, onClick}) {
  return (
    <div className='topic__container section__padding' onClick={onClick}>
       <div className='topic__container-header'>
         <img src={icon_img} alt='icon'/>
         <p>{name_prefixed}</p>
        </div>       
       <p className='topic__container-title'>{title}</p>
       <p className='topic__container-description'>{public_description}</p>
    </div>
  )
}

export default Topic