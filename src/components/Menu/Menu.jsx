import React from 'react';
import './Menu.scss';

import search from '../../images/search.png';
import { Friends } from './Friends/Friends';

export const Menu = () => {
  const menuArray = ['Profit',
    'Explore',
    'Profile',
    'Photos',
    'Videos',
    'Invite',
    'Music',
    'Candidates',
    'Calendar',
    'Feedback',
    'Help'];

  return (
    <div className="menu">
      <input id="menu__toggle" type="checkbox" />

      <label className="menu__btn" htmlFor="menu__toggle">
        <span />
      </label>

      <ul className="menu__list">
        <p className="menu__title">Menu</p>
        {
          menuArray.map(item => (
            <li className="menu__item">
              <a key={item} className="menu__text" href="/">{item}</a>
            </li>
          ))
        }
      </ul>
      
      <div className="menu__input">
        <input type="text" className="menu__search" placeholder="Search" />

        <img src={search} alt="search" className="menu__icon" />
      </div>
      <Friends />
    </div>
  );
};
