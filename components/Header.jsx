import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/pizza.png'
import Log from '../assets/redball.png'
import { UilShoppingCart, UilSearch } from '@iconscout/react-unicons'
import Link from 'next/link';



export default function Header() {
   return (
    <div className={css.header}>
        {/*logo side*/}
        <div className={css.logoContainer}>
        <div className={css.logo}>
         <Image src ={Logo} alt = "" width={150} height={170}/>
      
        </div>

        <div className={css.log}>
         <Image src ={Log} alt = "" width={270} height={160} />
        </div>

       {/* menu side*/}
       <ul className={css.menu}>
        <div> 
        <Link href="/"><a>HOME</a></Link></div> 
        <div>
        <Link href="/products"><a>PRODUCTS</a></Link></div> 
         <div>
         <Link href="/singleProduct/213"><a>PAGES</a></Link></div>
         <div>
         <Link href="/cart"><a>BLOG</a></Link></div>
        <div>
        <Link href="/login"><a>CONTACT</a></Link></div>
        
        </ul>

        {/*right side */}
        <div className={css.rightSide}>
            <div className={css.search}>
            <UilSearch size="22" color="#000"/> 
            </div>
                      
            <div className={css.cart}>
            <Link href="/cart">
       
            <UilShoppingCart size="32" color="blue" />
            </Link>
            <div className={css.badge}>1</div>
            </div>
            
        </div>

    </div>
    </div>
   )
};
