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

   //! при кліку на любу категорію вона стає в позицію вибраної категорії
   const [categoryId, setCategoryId] = React.useState();
   //_________________________________________________________
   const [sortType, setSortType] = React.useState({
      name: 'Популярності',
      sortProperty: 'raiting',
   });

   React.useEffect(() => {
      isLoading(true);
      fetch(
         `https://64ad45e0b470006a5ec5abab.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}` : ''
         }&sortBy=${sortType.sortProperty}&order=desc`,
      )
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr);
            isLoading(false);
         });
   }, [categoryId, sortType]); //залежність пустий масив означає component DidMount (тобто компонент зроби запит лише один раз коли ти рендеришся перший раз)
   //
   return (
      <div className="wrapper">
         <div className="_container">
            <Header></Header>
            <div className="_container_contain">
               <Routes>
                  <Route
                     path="/"
                     element={
                        <MainContent
                           items={items}
                           isLoading={loading}
                           value={categoryId}
                           onClickCategory={(id) => setCategoryId(id)}
                           valueSort={sortType}
                           onChangeSort={(id) => setSortType(id)}
                        />
                     }
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
               </Routes>
            </div>
         </div>
      </div>
   );
};

export default App;
