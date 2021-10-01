import React from "react";
import withStore from "../hoc/withStore";
import {Row, Col, Carousel} from 'react-bootstrap';

class HomeCarousel extends React.Component {

  render() {
    return (
      <Row>
        <Col>
          <Carousel
            interval={this.props.settings.delay}>
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