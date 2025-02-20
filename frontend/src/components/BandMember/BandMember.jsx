import React, { useEffect, useRef, useState } from 'react';
import './bandMember.css';

const BandMember = (props) => {
  const imageContainerRef = useRef(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (imageContainerRef.current) {
        const width = imageContainerRef.current.offsetWidth;
        setSize(width);
      }
    };

    updateSize(); // Adjust the size
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='text-white member-container'>
      <div 
        ref={imageContainerRef} 
        className={`member-image-container ${props.isLeft ? 'left' : 'right'}`}
        style={{ height: `${size}px` }} // Fix height = width
      >
        <img src={props.url} alt="" className='member-image'/>
      </div>
      <div className='info-container'>
        <h2 className='name-member'>{props.memberName}</h2>
        <p className='description-member'>{props.bio}</p>
      </div>
    
    </div>
  );
};

export default BandMember;
