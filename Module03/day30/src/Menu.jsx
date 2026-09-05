import "./App.css";
import { useState, useEffect, useRef, useContext, useCallback } from "react";
import Catagory from "./Catagory";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { useFetch } from "./useFetch";
import { CartContext } from  './cartContext.jsx';

function Menu() {
  const { data: dishes = [], loading, error } = useFetch("/dishList.json");
  const { dispatch } = useContext(CartContext);

  const [selecetedcatagory, setSelectedCatagoty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const filtered = dishes
    .filter((dish) => (selecetedcatagory === "All" ? true : dish.category === selecetedcatagory))
    .filter((dish) => dish.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    document.title = `${filtered.length} dishes available`;
  }, [filtered.length]);

  const handleAddToCart = useCallback((dish) => {
    dispatch({ type: "ADD_ITEM", payload: dish });
  }, [dispatch]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading the menu...</p>;
  if (error) return <p className="err" style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Catagory seleceted={selecetedcatagory} onSelect={setSelectedCatagoty} />

      <DishList dishes={filtered} addOrder={handleAddToCart} />
      <OrderForm />
    </>
  );
}

export default Menu;