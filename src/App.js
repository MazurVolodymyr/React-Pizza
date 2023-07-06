import './App.css';
import React from 'react';
import './zero.scss';
import Header from './components/Header/Header';
import MainContent from './pages/MainContent';
import NotFound from './pages/NotFound';

import { Route, Routes } from 'react-router-dom';
const App = () => {
   return (
      <div className="wrapper">
         <div className="_container">
            <Header></Header>
            <div className="_container_contain">
               <Routes>
                  <Route path="/" element={<MainContent />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </div>
         </div>
      </div>
   );
};

export default App;
