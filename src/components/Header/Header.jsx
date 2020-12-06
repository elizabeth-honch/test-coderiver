import React from 'react';
import './Header.scss';
import jordan from '../../images/jordan.png';
import dropdown from '../../images/dropdown.png';

export const Header = () => (
  <div className="header">
    <p className="header__title">Your Profit</p>

    <div className="header__block">
      <img src={jordan} alt="jordan" className="header__image" />

      <div className="header__info">
        <p className="header__name">Jordan J.</p>

        <p className="header__work">Administrator</p>
      </div>
      
      <img src={dropdown} className="header__dropdown" alt="dropdown" />
    </div>
  </div>
);
