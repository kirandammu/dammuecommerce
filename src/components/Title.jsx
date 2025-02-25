import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='title'>
      <p className="text"> <span>{text1}</span> {text2}  </p>
      <p className='line'></p>
    </div>
  )
}

export default Title
