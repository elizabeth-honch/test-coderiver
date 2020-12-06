import React from 'react';
import './Events.scss';

export const Events = () => (
  <div className="events">
    <div className="events__container">
      <p className="events__header">Upcoming Events with Jordan</p>

      <div className="events__block">
        <div className="events__info">
          <p className="events__title">Super Photography 2016</p>

          <p className="events__date">January 13th, Vienna - 6:30 PM</p>
        </div>
        <span className="events__item events__item-dark">Photography</span>
      </div>

      <div className="events__block">
        <div className="events__info">
          <p className="events__title">Photox Expo</p>

          <p className="events__date">March 28th, Paris - 7:30 PM</p>
        </div>
        <span className="events__item events__item-blue">Design</span>
      </div>
    </div>
  </div>
);
