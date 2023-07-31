import './App.css';
import React from 'react';
import './zero.scss';
import Header from './components/Header/Header';
import MainContent from './pages/MainContent';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';

const App = () => {
   const [searchValue, setSearchValue] = React.useState('');

   return (
      <div className="wrapper">
         <div className="_container">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}></Header>
            <div className="_container_contain">
               <Routes>
                  <Route path="/" element={<MainContent searchValue={searchValue} />}></Route>
                  <Route path="cart" element={<Cart></Cart>}></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </div>
         </div>
      </div>
   );
};

export default App;
