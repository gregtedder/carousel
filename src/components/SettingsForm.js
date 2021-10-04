import React from "react";
import {
  Form,
  Alert
} from 'react-bootstrap';
import { useBetween } from 'use-between';
import AppState from "../state/AppState";

const SettingsForm = () => {

  const { delay, setDelay, autoScroll, setAutoScroll } = useBetween(AppState);

  const handleChange = (evt) => {
    setDelay(evt.target.value);
  }

  const handleCheck = () => {
    setAutoScroll(!autoScroll);
  }

  const _delay = delay;
  const _valid = delay.toString().match(/^\d+$/g);
  return (
    <>
      <h1>Change Settings</h1>
      <Form.Group>
        <Form.Label> 
          Delay
        </Form.Label>
        <Form.Control type="text" value={_delay} onChange={handleChange} />
        { !_valid &&
          <Alert variant="warning">
            Delay has no effect. Please use only numbers.
          </Alert>
        }
      </Form.Group>
      <Form.Group>
        <Form.Check type="checkbox" checked={autoScroll} onChange={handleCheck} label="Auto Scroll" />
      </Form.Group>
    </>
  )

}

export default SettingsForm;