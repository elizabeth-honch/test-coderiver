import React from 'react';
import './ListOfFriends.scss';

import caroline from '../../../images/caroline.png';
import claire from '../../../images/claire.png';
import lina from '../../../images/lina.png';
import jason from '../../../images/jason.png';
import dash from '../../../images/dash.png';
import jessica from '../../../images/jessica.png';

const listFriends = [
  {
    id: 1,
    name: 'Caroline',
    src: caroline,
    status: 'Typing...',
    type: true,
  },
  {
    id: 2,
    name: 'Claire',
    src: claire,
    status: 'Designer',
    type: false,
  },
  {
    id: 3,
    name: 'Lina',
    src: lina,
    status: 'Sales Manager',
    type: false,
  },
  {
    id: 4,
    name: 'Jason',
    src: jason,
    status: 'CTO',
    type: false,
  },
  {
    id: 5,
    name: 'Dash',
    src: dash,
    status: 'Design Lead',
    type: false,
  },
  {
    id: 6,
    name: 'Jessica',
    src: jessica,
    status: 'Designer',
    type: false,
  },
];

export const ListOfFriends = () => (
  <ul className="list">
    {
      listFriends.map(friend => (
        <li key={friend.id} className="list__item">
          <img src={friend.src} alt={friend.status} />

          <div className="list__block">
            <p className="list__name">
              {friend.name}
            </p>
            
            <p className={`
              ${friend.type
          ? 'list__status-true'
          : 'list__status'
        }`}
            >
              {friend.status}
            </p>
          </div>
        </li>
      ))
    }
  </ul>
);
