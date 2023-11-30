import css from '../styles/Footer.module.css';
import styles from '../styles/Footer.module.css';
import { UilFacebook, UilTwitter, UilInstagram } from "@iconscout/react-unicons";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faPinterest,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className={css.container}>
            <div className={css.info}>
                INFORMATION
                Home  
                Blog  
                About Us  
                Menu  
                Contact Us
            </div>
            <div className={css.top}>
                TOP ITEMS
                Pepperoni 
                Swiss Mushroom 
                Barbeque Chicken 
                Vegetarian 
                Ham & Cheese
            </div>
            <div className={css.others}>
                OTHERS
                Checkout 
                Cart 
                Product
                Locations 
                legal
            </div>
            <div className={css.socialContainer}>
                <span>SOCIAL MEDIA</span>
                <div className={css.social}>
                    
          <a  href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      </div>

                    <span>Sign up and get exclusive offers and coupons</span>
                    <div className={styles.add}>
            <button className={`btn ${css.btn}`}>SIGN UP</button>
        </div>
               
            </div>
        </div>
    );
}
