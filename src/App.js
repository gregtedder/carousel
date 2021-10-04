import React from 'react';
import SettingsForm from './components/SettingsForm';
import HomeCarousel from './components/HomeCarousel';
import { Container } from 'react-bootstrap';

export default function App() {

  return (
    <Container>
      <SettingsForm />
      <HomeCarousel />
    </Container>
  );

}

