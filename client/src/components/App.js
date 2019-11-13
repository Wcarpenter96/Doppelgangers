import React from 'react';

import Header from './../containers/Header';
import Jumbotron from './../containers/Jumbotron';


export default ({ children }) => {
  return (
    <div>
      <Header/>
      <Jumbotron/>
      {children}
    </div>
  );
};