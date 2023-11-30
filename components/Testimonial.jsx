import css from '../styles/Testimonial.module.css'
import Image from 'next/image'
import T1 from '../assets/T1.jpg'
import T2 from '../assets/T2.jpeg'
import T3 from '../assets/T3.jpeg'
import T4 from '../assets/T4.jpeg'

export default function Testimonial() {
    return(
          <>
           <div className={css.heading}>
            <span style={{ color: "red" }}> Customer Feedback</span>
            <span > Client Testimonial</span>
            <span></span>
           </div>

            {/* features */}
            <div className={css.strength}>
                <div className={css.feature}>
                    <div className={css.ImageWrap}>
                        <Image src={T1} alt="" objectFit='cover' layout='intrinsic'/>

                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap</span>
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={T2} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                   
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={T3} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span> Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                    
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={T4} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                   
                </div>

            </div>
          </>
    )
};