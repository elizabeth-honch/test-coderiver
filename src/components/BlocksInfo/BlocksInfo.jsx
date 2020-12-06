import React from 'react';
import './BlocksInfo.scss';

import greenArrow from '../../images/green-arrow.png';
import redArrow from '../../images/red-arrow.png';

export const BlocksInfo = () => {
  const information = [
    {
      number: '3,594',
      title: 'NEW ORDERS',
      procent: '13% INCREASE',
      color: '#4695d9',
      img: greenArrow,
    },
    {
      number: '105,990',
      title: 'TOTAL SALES',
      procent: '4% INCREASE',
      color: '#21bb39',
      img: greenArrow,
    },
    {
      number: '$50,890',
      title: 'TOTAL PAID OUT',
      procent: '21% DECREASE',
      color: '#f2a80a',
      img: redArrow,
    },
    {
      number: '453',
      title: 'NEW CUSTOMERS',
      procent: '5% DECREASE',
      color: '#fc565e',
      img: redArrow,
    },
  ];

  return (
    <div className="info">
      {
        information.map(data => (
          <div className="info__block">
            <div className="info__numbers">
              <p className="info__number">{data.number}</p>
              <p
                style={{ color: data.color }}
                className="info__title"
              >
                {data.title}
              </p>
            </div>
            <div className="info__procent">
              <img src={data.img} alt="green arrow" className="info__arrow" />
              <p className="info__count">{data.procent}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
