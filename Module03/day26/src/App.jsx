import Dish from "./Dish"
import Header from './Header'
import "./App.css"
function App() {
const menuDishes = [
  { id: 1, name: 'Doro Wat', price: 450 },
  { id: 2, name: 'Beyaynetu', price: 200 },
  { id: 3, name: 'Kitfo', price: 500 },
  { id: 4, name: 'Tibs', price: 400 },
];
  return (
    <>
    <Header/>
      <main className="menu">
        {menuDishes.map(dish=>(
          <Dish key={dish.id} dishName={dish.name} price={dish.price}/>
        ))}
      </main>
    </>
  )
}

export default App
