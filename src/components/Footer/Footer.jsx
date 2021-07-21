import React from 'react'
import styles from './Footer.module.css'
import { FaReact, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
          <p> &copy; 2021 TaofiqCodes. All right reserved. </p>
          <p> Build with Reactjs <FaReact /> and MaterialUI. </p>
          <p><a href="https://covid19.mathdro.id/api">Get the API Link <FaArrowRight /></a></p>
        </div>
    )
}

export default Footer
