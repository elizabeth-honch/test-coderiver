import React from 'react';
import './App.scss';
import { UsersList } from './components/UsersList/UsersList';
import { Menu } from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { BlocksInfo } from './components/BlocksInfo/BlocksInfo';
import { Table } from './components/Table/Table';
import { Card } from './components/Card/Card';
import { Events } from './components/Events/Events';

export const App = () => (
  <div className="app">
    <UsersList />
    <Menu />

    <main className="app__main">
      <Header />
      <div className="app__container">
        <div className="app__info">
          <History />

          <BlocksInfo />

          <Table />
        </div>

        <div className="app__card">
          <Card />
          
          <Events />
        </div>
      </div>
    </main>
  </div>
);
