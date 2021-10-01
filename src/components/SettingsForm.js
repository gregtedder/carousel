import React from "react";
import {
  Row,
  Col,
  Form,
  Alert
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
    const delay = this.props.settings.delay;
    const valid = delay.toString().match(/^\d+$/g);
    return (
      <>
        <h1>Change Settings</h1>
        <Form.Group>
          <Form.Label> 
            Delay
          </Form.Label>
          <Form.Control type="text" value={delay} onChange={this.handleChange} />
          { !valid &&
            <Alert variant="warning">
              Delay has no effect. Please use only numbers.
            </Alert>
          }
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" checked={this.props.settings.autoScroll} onChange={this.handleCheck} label="Auto Scroll" />
        </Form.Group>
      </>
    )
  }

}

export default withStore(SettingsForm);