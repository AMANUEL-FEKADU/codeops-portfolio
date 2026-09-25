import React, { useEffect } from 'react'
import CatagoryBar from './CatagoryBar'
import DishWrapper from './DishWrapper'
import Searchbox from './Searchbox'
import { useFetch } from './useFetch'
import { useSearchParams } from 'react-router-dom'
import { userCartStore } from './userCartStore' 

export default function Menu() {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get('category') || 'All Dishes'
    
    const total = userCartStore((state) =>
        state.items.reduce((sum, item) => sum + (item.priceETB || item.price || 0), 0)
    )

    const { data: menu, loading, error } = useFetch('/dishes.json')

    const handleselected = (newCat) => {
        if (newCat === "All Dishes") {
            setSearchParams({})
        } else {
            setSearchParams({ category: newCat })
        }
    }

    const currentMenu = menu || []
    const displayed = category === 'All Dishes'
        ? currentMenu
        : currentMenu.filter(dishe => dishe.category === category)

    useEffect(() => {
        document.title = `${displayed.length} Dishes`
    }, [displayed.length])

    if (loading) return <div>Loading...</div>    
    if (error) return <div>{error}</div>

    return (
        <>
            <p>total: {total}</p>
            <Searchbox />
            <CatagoryBar select={category} onSelect={handleselected} menu={currentMenu} />
            {displayed.length === 0 ? (
                <div>Empty</div>
            ) : (
                <DishWrapper>{displayed}</DishWrapper>
            )}
        </>
    )
}