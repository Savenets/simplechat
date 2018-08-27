import React, { Component } from 'react';
import './App.scss';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';
import { container, container__main } from './App.scss';

const App = () => {
  return (
    <div className={container}>
      <section className={container__main}>
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
};

export default App;
