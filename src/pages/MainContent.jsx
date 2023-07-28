import Selection from '../components/SelectionOfPizza/Selection';
import Cards from '../components/Body/Cards';
import Skeleton from '../components/Body/Skeleton';
import React from 'react';
import axios from 'axios';
import QueryString from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
const MainContent = ({ searchValue }) => {
   const categoryId = useSelector((state) => state.filterSlice.categoryId);
   const dispatch = useDispatch();

   const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);

   const onClickCategory = (id) => {
      dispatch(setCategoryId(id));
   };

   //! відправка запиту на сервер для отримання даних та логіка загрузки (якщо загрузилось показуємо піцу якщо ні то скелетон)
   const [items, setItems] = React.useState([]);
   const [loading, isLoading] = React.useState(true);

   React.useEffect(() => {
      isLoading(true);

      axios
         .get(
            `https://64ad45e0b470006a5ec5abab.mockapi.io/items?${
               categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType.sortProperty}&order=desc`,
         )
         .then((response) => {
            setItems(response.data);
            isLoading(false);
         });
   }, [categoryId, sortType, searchValue]); //залежність, пустий масив означає component DidMount (тобто компонент зроби запит лише один раз коли ти рендеришся перший раз)
   //

   const navigate = useNavigate()
   React.useEffect(()=>{
      const queryString = QueryString.stringify({
         sortProperty: sortType, categoryId
      })
      navigate(`?${queryString}`)
   },[categoryId, sortType ])

   const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />); //в map нижнє _ слугує щоб JS не давав помилку так як ми створюємо фейкові дані в масиві
   const pizzass = items
      .filter((obj) => {
         if (obj.title.toLowerCase().includes(searchValue)) {
            return true;
         } else {
            return false;
         }
      })
      .map((obj, id) => (
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
         <Selection value={categoryId} onClickCategory={onClickCategory}></Selection>
         <h1 style={{ marginBottom: '45px' }}>Наша піца</h1>
         <div className="body">{loading ? skeleton : pizzass}</div>
      </>
   );
};

export default MainContent;
