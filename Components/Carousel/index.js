
import _ from 'lodash';
import { useRouter } from 'next/router';
import Slider from 'react-slick';


import { NavigationsStyled } from '../styles';

export default function AppCarousel( ) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div >
        <Slider style ={{overflow: 'hidden'}} {...settings}>
          <div>
            <img
              className="d-block w-100"
              src="https://bizweb.dktcdn.net/100/348/213/themes/719322/assets/slider_1.png?1595476525489"
              alt="First slide"
              
            />
          </div>
          <div>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/348/213/themes/719322/assets/slider_1.png?1595476525489"
            alt="Third slide"
            
          />
          </div>
          <div>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/348/213/themes/719322/assets/slider_1.png?1595476525489"
            alt="Third slide"
            
          /> 
          </div>
          
        </Slider>
      </div>
    </>
  );
}
