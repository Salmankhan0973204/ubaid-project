import React from 'react'

const Notificationitem = (props) => {
  console.log(props)
  return (
    <div >{props.comment} 
    <div><img src={props.img} alt="kk"></img></div>
   
        </div>
  )
}

export default Notificationitem