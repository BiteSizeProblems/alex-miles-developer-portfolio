import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import CircularMenuCenter from './components/CircularMenuCenter';
import CircularMenuItem from './components/CircularMenuItem';

import './CircularMenu.css';

const CircularMenu = () => {

  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {

    $('#menu-button').on('click', function(){ setMenuActive(true) });
    $('#backdrop').on('click', function(){ setMenuActive(false) });

  }, []);

  return (
    <div className='circular-menu' style={{visibility: menuActive === true? 'visible' : 'hidden'}}>
      <CircularMenuCenter />
      <CircularMenuItem />
    </div>
  )
};

export default CircularMenu;