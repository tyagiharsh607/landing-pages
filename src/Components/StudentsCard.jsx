import React from 'react'

const StudentsCard = ({imageSrc,heading,para}) => {
  return (
    <div className='student-card'>
     <img src={imageSrc} alt="" /> 
     <h2>{heading}</h2>
     <p>{para}</p>
     <button>Explore</button>
    </div>
  )
}

export default StudentsCard
