import "./App.css"
import { useState, useEffect, useRef } from "react"
import Catagory from "./Catagory"
import DishList from "./DishList"
import OrderForm from "./OrderForm"

function Menu() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selecetedcatagory, setSelectedCatagoty] = useState('All')
  const [total, setTotal] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const searchInputRef = useRef(null)

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    async function loadDishes() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/dishList.json", { signal: controller.signal })
        if (!res.ok) {
          throw new Error("Could not load the menu items.")
        }
        const data = await res.json()
        setDishes(data)
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadDishes()

    return () => {
      controller.abort()
    }
  }, [selecetedcatagory])

  const filtered = dishes
    .filter(dish => selecetedcatagory === 'All' ? true : dish.category === selecetedcatagory)
    .filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    document.title = `${filtered.length} dishes available`
  }, [filtered.length])

  function handleadd(dishprice) {
    setTotal(prev => prev + dishprice)
  }

  if (loading) return <p style={{ textAlign: "center" }}>Loading the menu...</p>
  if (error) return <p className="err" style={{ color: "red", textAlign: "center" }}>{error}</p>

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

      <Catagory seleceted={selecetedcatagory} onSelect={setSelectedCatagoty}/>
      <div className="ordertotal">
        <h4>Total Order: {total} ETB</h4>
      </div>

      <DishList dishes={filtered} addOrder={handleadd}/>
      <OrderForm/>
    </>
  )
}

export default Menu