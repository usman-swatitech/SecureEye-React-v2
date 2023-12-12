import React from 'react'

function Button (props) {
  return (
    <>
      <div className='outside-btn m-0 p-0'>
        <div className='inside-btn p-0 m-0'>
          <button className='sign-btn pt-2 pb-2'>{props.name}</button>
        </div>
      </div>
    </>
  )
}

export default Button
