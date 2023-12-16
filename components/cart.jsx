import css from '../styles/cart.module.css'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.png'
import Image from 'next/image'
import { UilShoppingCart} from '@iconscout/react-unicons'

export default function sp1(){
    return ( 
        <div className={css.heading}>
            
          
            <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={p1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>New Pizza
                    <span style={{ color: "red" }}> $10</span>
                    </span>
                    <span>This is new pizza</span>
                    <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
                </div>

               


                

                

            
        </div>

          

    )
};