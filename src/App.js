import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import MenuButton from './components/navigation/MenuButton';
import CircularMenu from './components/circularMenu/CircularMenu';
import Landing from './landingPage/LandingPage';

import './App.css';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {

    $('#menu-button').on('click', function(){ setMenuActive(true) });
    $('#backdrop').on('click', function(){ setMenuActive(false) });

  }, []);

  return (
    <div className='app' >
      <div id='backdrop' className='backdrop' style={{visibility: menuActive === true ? 'visible' : 'hidden'}}></div>
      <MenuButton />
      <div className='app_content' >
        <CircularMenu />
        <Landing />
      </div>
    </div>
  );
}

export default App;
