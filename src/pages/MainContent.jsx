import Selection from '../components/SelectionOfPizza/Selection';
import Cards from '../components/Body/Cards';
import Skeleton from '../components/Body/Skeleton';
import React from 'react';
const MainContent = ({ searchValue }) => {

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

   const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />); //в map нижнє _ слугує щоб JS не давав помилку так як ми створюємо фейкові дані в масиві
   const pizzass = items.filter((obj) => {
         if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
         } else {
            return false;
         }
      }).map((obj, id) => (
         <Cards
            key={id}
            imageUrl={obj.imageUrl}
            price={obj.price}
            title={obj.title}
            sizes={obj.sizes}
            types={obj.types}
         />
      ));
      

   return (
      <>
         <Selection
            value={categoryId}
            onClickCategory={(id) => setCategoryId(id)}
            valueSort={sortType}
            onChangeSort={(id) => setSortType(id)}
         ></Selection>
         <h1 style={{ marginBottom: '45px' }}>Наша піца</h1>
         <div className="body">{loading ? skeleton : pizzass}</div>
      </>
   );
};

export default MainContent;
