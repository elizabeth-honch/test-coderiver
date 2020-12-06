import React from 'react';
import './Friends.scss';

import { ListOfFriends } from '../ListOfFriends/ListOfFriends';
import settings from '../../../images/Settings.png';

export const Friends = () => (
  <div className="friends">
    <div className="friends__container">
      <div className="friends__block">
        <span className="friends__title">Friends</span>

        <img src={settings} alt="setting" className="friends__setting" />
      </div>
      
      <ListOfFriends />
    </div>
  </div>
);
