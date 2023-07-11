import Selection from '../components/SelectionOfPizza/Selection';
import Cards from '../components/Body/Cards';
import Skeleton from '../components/Body/Skeleton';
const MainContent = (props) => {
   return (
      <>
         <Selection></Selection>
         <h1 style={{ marginBottom: '45px' }}>Наша піца</h1>
         <div className="body">
            {props.isLoading
               ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) //в map нижнє _ слугує щоб JS не давав помилку так як ми створюємо фейкові дані в масиві
               : props.items.map((obj, id) => (
                    <Cards
                       key={id}
                       imageUrl={obj.imageUrl}
                       price={obj.price}
                       title={obj.title}
                       sizes={obj.sizes}
                       types={obj.types}
                    />
                 ))}
         </div>
      </>
   );
};

export default MainContent;
