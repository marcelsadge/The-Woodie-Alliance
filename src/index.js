import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import WoodieFooter from './WoodieFooter';

import "@fontsource/nunito";
import WoodieMainPage from './WoodieMain/index';
import WoodieNavBar from './WoodieNavBar';
import WoodieTeamPage from './WoodieTeamPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <WoodieNavBar />
    <WoodieFooter />
    <Routes>
      <Route path='/' element={<WoodieMainPage />} />
      <Route path='/teams/:team' element={<WoodieTeamPage />} />
      <Route path='/teams' element={<WoodieTeamPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
