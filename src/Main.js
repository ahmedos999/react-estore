import img from './/imgs/S2.png'
import img2 from './/imgs/T1.png'
import img3 from './/imgs/J1.png'
import img4 from './/imgs/w1.png'
import img5 from './/imgs/g5.png'
import { FaShopify } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCube, Pagination,Autoplay,Navigation,EffectCards,EffectCoverflow} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";



const Main = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("Shoes");
  }

    return ( <div>
      {/* <Tabs></Tabs> */}
      <div className="maincontent-2">
        <div className="intro">
            <FaShopify className='into-icon'></FaShopify>
            <h2>
            Welcome the E-Store
            </h2>
            <p>Checkout our finest Offers and Sales <br /> Shop easliy and find what you like with great offers</p>
            <button onClick={handleClick}>Shop Now</button>
        </div>
        <div className='test'>
        <Swiper

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
      effect={'coverflow'}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination,Autoplay,Navigation,EffectCards,EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={img} alt="" className='slider'/></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" className='slider'/></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" className='slider'/></SwiperSlide>
      <SwiperSlide><img src={img4} alt="" className='slider'/></SwiperSlide>
      <SwiperSlide><img src={img5} alt="" className='slider'/></SwiperSlide>
    </Swiper>
        </div>
       

        
    </div></div> );
}
 
export default Main;