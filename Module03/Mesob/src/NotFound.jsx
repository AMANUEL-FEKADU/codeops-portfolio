import React from 'react'
import { TbError404 } from "react-icons/tb";
import { Link} from 'react-router-dom';
import styles from './NotFound.module.css'
function NotFound() {
  return (
    <>
        <div className={styles.container}>
            <TbError404 className={styles.error}/>
           <button className={styles.bt}><Link to='/'> go to menu</Link></button>
        </div>
    </>
  )
}

export default NotFound