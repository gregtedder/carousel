
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { useBetween } from 'use-between';
import AppState from "../state/AppState";
import Slide from '../components/Slide';
import HomeSlides from '../settings/HomeSlides';

const HomeCarousel = () => {

  const { delay, autoScroll } = useBetween(AppState);

  let _delay = parseInt(delay);
  _delay = _delay > 0 ? _delay * 1000 : 5000;
  const interval = autoScroll ? _delay : 999999999;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: interval,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  }
  return (
    <Row>
      <Col>
        <Slider {...settings}>
          { 
            HomeSlides.map((obj, idx) => {
              return (
                <div key={["Slide", idx].join('')}>
                  <Slide {...obj} />
                </div>
              );
            })
          }
        </Slider>
      </Col>
    </Row>
  );

}

export default HomeCarousel;
