import React from "react";
import {
  Row,
  Col,
  Form
} from 'react-bootstrap';
import withStore from "../hoc/withStore";

class SettingsForm extends React.Component {

  handleChange = (evt) => {
    this.props.updateDelay(evt.target.value);
  }

  handleCheck = (evt) => {
    this.props.updateAutoScroll(!this.props.settings.autoScroll);
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Delay</Form.Label>
              <Form.Control type="text" value={this.props.settings.delay} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" checked={this.props.settings.autoScroll} onChange={this.handleCheck} label="Auto Scroll" />
            </Form.Group>
          </Col>
        </Row>
      </>
    )
  }

}

export default withStore(SettingsForm);