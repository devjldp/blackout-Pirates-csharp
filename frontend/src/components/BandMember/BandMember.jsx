import React from 'react'
import './bandMember.css'
const BandMember = (props) => {
  return (
    <div className='text-white member-container'>
      <div className='member-image'>
        imagen
      </div>
      <div className='info-container'>
        <h2 className='name-member'>{props.memberName}</h2>
        <p className='description-member'>{props.bio}</p>
      </div>
    </div>
  )
}
export default BandMember;