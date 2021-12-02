import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Caraousel=()=>{
    return <><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1632922583_w.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bigbasket.com/media/uploads/banner_images/hp_FnV_m_Dussehra_1600x460_111021.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/S/aplus-media/vc/7b77632e-d90f-49db-9f02-eb16746352d1.__CR0,0,1940,600_PT0_SX970_V1___.jpg"
        alt="Third slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_EP_idwaligiftingstore_1130x400_131021.jpg"
        alt="Fourth slide"
      />
    </Carousel.Item>
      
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.jiomart.com/images/category/43/snacks-namkeen-20200704.jpg" 
        alt="Fifth slide"
        width = "50%"
      />
    </Carousel.Item>
  </Carousel>
  </>
}

export default Caraousel;