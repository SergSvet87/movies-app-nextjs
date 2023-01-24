
import styles from '../styles/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <div className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}. All rights reserved |
        This template is made with <i className="bx bxs-heart"></i> in
        <address className="footer__address">
          <a
            href="https://github.com/SergSvet87/App_Movies.git"
            target="_blank"
            rel="noreferrer">
            Ukraine
          </a>
        </address>
      </div>
    </div>
  </footer>
)

export default Footer;