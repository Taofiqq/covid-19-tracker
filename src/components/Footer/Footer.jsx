import React from 'react'
import styles from './Footer.module.css'
import { FaReact, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>

          <ul className={styles.footerItem}>
            <li className={styles.footerList}>
              <a href="https://github.com/Taofiqq" className={styles.footerLink}><FaGithub/></a>
            </li>
            <li className="footer-list">
              <a href="https://www.linkedin.com/in/taofiq-aiyelabegan-6241a1139/" className={styles.footerLink}><FaLinkedin/></a>
            </li>
            <li className="footer-list">
              <a href="https://twitter.com/Taofiq__" className={styles.footerLink}><FaTwitter/></a>
            </li>
          </ul>
          <p className={styles.para}> &copy; 2021 TaofiqCodes. All right reserved. </p>
          <p className={styles.para}> Built with Reactjs <span><FaReact /></span> and MaterialUI. </p>
          <p className={styles.para}><a href="https://covid19.mathdro.id/api">API LINK</a></p>
        </div>
    )
}

export default Footer
