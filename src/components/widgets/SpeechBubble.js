import React, { useState } from 'react';
import Avatar from './Avatar';

import './SpeechBubble.css';

const SpeechBubble = (props) => {

  const bubbleText = `"${props.text}"`;
  const [direction, setDirection] = useState(props.direction);

  return (
    <div style={{border:'1px solid white', height: '100%', width:'100%'}}>
      <p>H</p>
    </div>
  )

  return (
    <div style={{border:'1px solid white', height: '100%', width:'100%'}}>
      <Avatar className='avatar'/>
      <div className='speech-bubble_container'>
        <div className='speech-bubble_text' >
          <p >{bubbleText}</p>
        </div>
      </div>
    </div>
  )
};

export default SpeechBubble;