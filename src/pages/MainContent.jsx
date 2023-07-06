import pizzas from '../assets/pizza.json';
import Selection from '../components/SelectionOfPizza/Selection';
import Cards from '../components/Body/Cards';

const MainContent = () => {
   return (
      <>
         <Selection></Selection>
         <h1 style={{ marginBottom: '45px' }}>Наша піца</h1>
         <div className="body">
            {pizzas.map((obj, id) => (
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
