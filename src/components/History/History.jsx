import React from 'react';
import './History.scss';
import history from '../../images/history.png';

export const History = () => (
  <div className="history">
    <div className="history__header">
      <p className="history__title">Earnings History</p>

      <div className="history__btns">
        <button type="button" className="history__btn">Weekly</button>

        <button type="button" className="history__btn">Montly</button>

        <button type="button" className="history__btn">Yearly</button>
      </div>
    </div>
    
    <img src={history} alt="history" className="history__img" />
  </div>
);
