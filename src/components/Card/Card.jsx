import React from 'react';
import './Card.scss';

import face from '../../images/face-jordan.png';
import limit from '../../images/limit.png';

export const Card = () => (
  <div className="card">
    <img src={face} alt="jordan" className="card__photo" />
    
    <div className="card__header">
      <p className="card__name">Jordan Jackson</p>

      <p className="card__work">Beta Tester | Ultimate User</p>
    </div>

    <hr className="card__line" />

    <div className="card__info">
      <p className="card__title">Email</p>

      <p className="card__value">jordan.jackson@dashboard.com</p>

      <p className="card__title">Mobile</p>

      <p className="card__value">+44 (0) 7887 665 588</p>

      <p className="card__title">Skill Level</p>

      <p className="card__value">Senior (50K+)</p>

      <p className="card__title">Paid Out Limit</p>

      <div className="card__title-block">
        <img src={limit} alt="limit" className="card__limit" />

        <p className="card__limit-black">
          <span className="card__limit-blue">$580</span>
          /$750
        </p>
      </div>
      <div className="card__bio">
        <p className="card__title">Bio</p>

        <p className="card__bio-info">
          Jordan graduated from Cornell University
          in 2004 with a Bachelor degree in computer science
          and a specialization in mathematics.
          While there, he published two articles on Code-project.
        </p>
      </div>

      <div className="card__skills">
        <p className="card__title">Skills</p>

        <ul className="card__list">
          <li className="card__item card__item-blue">Photography</li>

          <li className="card__item card__item-green">Teacher</li>

          <li className="card__item card__item-gray">Traveler</li>

          <li className="card__item card__item-red">iOS</li>
        </ul>
      </div>
    </div>
  </div>
);
