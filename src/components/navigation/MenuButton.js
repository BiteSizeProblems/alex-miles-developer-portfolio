import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import './MenuButton.css';

const MenuButton = () => {

  const [backdropActive, setBackdropActive] = useState(false);

  useEffect(() => {

    $('#backdrop').on('click', function(){ setBackdropActive(false) });

  }, []);

  return (
    <div className='menu-button_container' style={{visibility: backdropActive === true ? 'hidden' : 'visible'}}>
      <button id='menu-button' onClick={() => setBackdropActive(true)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
};

export default MenuButton;