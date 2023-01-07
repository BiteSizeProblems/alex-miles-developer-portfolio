import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

import '../CircularMenu.css';

const CircularMenuItem = () => {

  return (
    <div className='menu-item'>
      <button id='item1' ><AiFillHome className='item-icon'/></button>
      <button id='item2' ><BsFillPersonFill className='item-icon'/></button>
      <button id='item3' ><FaProjectDiagram className='item-icon'/></button>
      <button id='item4' ><MdOutlineDesignServices className='item-icon'/></button>
    </div>
  )
};

export default CircularMenuItem;