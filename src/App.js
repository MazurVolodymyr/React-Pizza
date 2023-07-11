import './App.css';
import React from 'react';
import './zero.scss';
import Header from './components/Header/Header';
import MainContent from './pages/MainContent';
import NotFound from './pages/NotFound';

import { Route, Routes } from 'react-router-dom';
const App = () => {
   //! відправка запиту на сервер для отримання даних та логіка загрузки (якщо загрузилось показуємо піцу якщо ні то скелетон)
   const [items, setItems] = React.useState([]);
   const [loading, isLoading] = React.useState(true);

   React.useEffect(() => {
      fetch('https://64ad45e0b470006a5ec5abab.mockapi.io/items')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr);
            isLoading(false);
         });
   }, []); //залежність пустий масив означає component DidMount (тобто компонент зроби запит лише один раз коли ти рендеришся перший раз)
   //__________________________________________________________//

   return (
      <div className="wrapper">
         <div className="_container">
            <Header></Header>
            <div className="_container_contain">
               <Routes>
                  <Route
                     path="/"
                     element={<MainContent items={items} isLoading={loading} />}
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </div>
         </div>
      </div>
   );
};

export default App;
