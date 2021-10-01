import React from "react";
import withStore from "../hoc/withStore";
import {Row, Col, Carousel} from 'react-bootstrap';

class HomeCarousel extends React.Component {

  render() {
    const autoScroll = this.props.settings.autoScroll;
    const delay = this.props.settings.delay;
    const interval = autoScroll ? delay : 999999999;
    return (
      <Row>
        <Col>
          <Carousel
            interval={interval}>
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src="screen_1.png"
                alt="screen 1" />
              <Carousel.Caption>
                <h3>Did the work in VSCode</h3>
                <p>Just because</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src="screen_2.png"
                alt="screen 2" />
              <Carousel.Caption>
                <h3>Over-complicated with redux</h3>
                <p>Had to do something fun with it</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src="screen_3.png"
                alt="screen 3" />
              <Carousel.Caption>
                <h3>Used a HOC to connect components to the store</h3>
                <p>More flexible than the container pattern</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src="screen_4.png"
                alt="screen 4" />
              <Carousel.Caption>
                <h3>And redux helped keep App simple</h3>
                <p>No need to push state up</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }

}

export default withStore(HomeCarousel);