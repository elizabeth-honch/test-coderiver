import React from 'react';
import './UsersList.scss';

import first from '../../images/first.png';
import second from '../../images/second.png';
import third from '../../images/third.png';
import four from '../../images/four.png';

export const UsersList = () => (
  <div className="users">
    <ul className="users__list">
      <li className="users__item">
        <img src={first} alt="users__photo" className="users__photo" />
      </li>

      <li className="users__item">
        <img
          src={second}
          alt="users__photo"
          className="users__photo users__photo-checked"
        />
      </li>

      <li className="users__item">
        <img src={third} alt="users__photo" className="users__photo" />
      </li>

      <li className="users__item">
        <img src={four} alt="users__photo" className="users__photo" />
      </li>
    </ul>
  </div>
);
