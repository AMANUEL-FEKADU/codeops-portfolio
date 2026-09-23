import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <div className={styles.herocontainer}>
        <div>
             {/* fo the middle dot alt + 0183 ---- it was very small */}
            <span className={styles.heighlight}> <span className={styles.crc}> </span>  TRADITIONAL HABESHA HEARTH</span>
            <div >
                <h1 className={styles.first}>Communal Warmth,</h1>
                <h1 className={styles.second}>Slow-Cooked Heritage.</h1>
                <p>Handcrafted wats, ancient stone-ground teff injera, and velvety kitfo
simmered in 72-hour infused niter kibbeh and heirloom berbere
harvested from the Ethiopian highlands.</p>
            </div>
            <div className={styles.stat}>
                <h4 className={styles.per}>100% <br /> <span>Brown* white Teff</span></h4>
                <h4 className={styles.plu}>6+ Hours <br /> <span>Slow Stew Caramels</span></h4>
                <h4 className={styles.nm}>Gursha <br /> <span>Hospitality Shared</span></h4>
            </div> 
        </div>
        <div className={styles.imageWrapper}>
            <img src="https://mesobrestaurant.no/wp-content/uploads/2023/01/dreamstime_xxl_264579900.jpg" alt="" />
            <div className={styles.btbg}>
                <div>
                    <span>Centerpiece</span>
                    <h3>Great Mesob Fist</h3>
                </div>
                <div className={styles.price}>ETB 1,650</div>
            </div>
        </div>
    </div>
  )
}

export default Hero