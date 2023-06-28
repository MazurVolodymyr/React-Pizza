import './App.css';
import './zero.scss';
import Header from './components/Header/Header';
import Selection from './components/SelectionOfPizza/Selection';
import Cards from './components/Body/Cards';
import pizzas from './assets/pizza.json';

const App = () => {

   return (
      <div className="wrapper">
         <div className="_container">
            <Header></Header>
            <div className="_container_contain">
               <Selection></Selection>
               <h1 style={{ marginBottom: '45px' }}>Наша піца</h1>
               <div className="body">
                  {pizzas.map((obj) => (
                     <Cards
                        imageUrl={obj.imageUrl}
                        price={obj.price}
                        title={obj.title}
                        sizes={obj.sizes}
                        types={obj.types}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;
