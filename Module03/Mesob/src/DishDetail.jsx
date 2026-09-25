import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch'
import styles from './DishDetail.module.css'
function DishDetail() {
    const {id}=useParams()
    const {data:menu,loading,error}=useFetch('/dishes.json')

    if(loading) return <div>loading</div>
    if(error) return <div>{error}</div>

    const dish=menu?.find((d)=>String(d.id)===String(id))
    if(!dish) return <div>Not FOund</div>
  return (
    <>
    <div className={styles.container}>
        <h2>{dish.nameEn}</h2>
        <p>{dish.description}</p> <br />
        <span>{dish.servings}</span>
    </div>
    </>
  )
}

export default DishDetail