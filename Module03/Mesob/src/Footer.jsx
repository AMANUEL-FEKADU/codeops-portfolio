import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <>
    <div className={styles.container}>
        <div>
            <h4 className={styles.logo}>Mesob House</h4>
            <p>Sharing traditions from the Ethiopian <br />
highlands — one Gursha at a time.</p>
        </div>

        <div>
            <h4 >Hospital Hours</h4>
           <p>Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
           <p>Monday: Reserved for Private
             Banquets</p>
        </div>

        <div>
            <h4>ADDIS LOCATION</h4>
           <p>Bole Medhanialem, Addis Ababa & <br />
                express delivery across town.</p>
           <p>+251 911 234 567</p>
        </div>
        

    </div>
    </>
  )
}

export default Footer