import React from 'react';
import './Table.scss';

import arrow from '../../images/double-arrow.png';

export const Table = () => {
  const tableData = [
    {
      referrer: 'note.com',
      view: 54,
      sale: 12,
      procent: '10.5%',
      price: '$50',
    },
    {
      referrer: 'Direct, email, IM',
      view: 96,
      sale: 24,
      procent: '25%',
      price: '$10',
    },
    {
      referrer: 'Recommended',
      view: 5,
      sale: 5,
      procent: '100%',
      price: '$10',
    },
    {
      referrer: 'Dribbble',
      view: 1,
      sale: 0,
      procent: '0.0%',
      price: '$0',
    },
    {
      referrer: 'google.co.uk',
      view: 5,
      sale: 0,
      procent: '0.0%',
      price: '$0',
    },
    {
      referrer: 'google.com.tr',
      view: 0,
      sale: 0,
      procent: '0.0%',
      price: '$0',
    },
    {
      referrer: 'mail.google.com',
      view: 1,
      sale: 0,
      procent: '0.0%',
      price: '$0',
    },
    {
      referrer: 'facebook.com',
      view: 5,
      sale: 0,
      procent: '0.0%',
      price: '$0',
    },
  ];

  return (
    <table className="table" cellSpacing="5" cellPadding="10">
      <tr className="table__row-head">
        <th className="table__title">Referrer</th>

        <th className="table__head">Views</th>

        <th className="table__head">Sales</th>

        <th className="table__head">Conversion</th>

        <th className="table__head">
          Total
          <img src={arrow} alt="arrow" className="table__arrow" />
        </th>
      </tr>
      {
        tableData.map(data => (
          <tr key={data.referrer} className="table__row">
            <td>{data.referrer}</td>

            <td>{data.view}</td>

            <td>{data.sale}</td>

            <td>{data.procent}</td>

            <td>{data.price}</td>
          </tr>
        ))
      }
    </table>
  );
};
