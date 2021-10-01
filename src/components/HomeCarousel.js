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
              One
            </Carousel.Item>
            <Carousel.Item>
              Two
            </Carousel.Item>
            <Carousel.Item>
              Three
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }

}

export default withStore(HomeCarousel);