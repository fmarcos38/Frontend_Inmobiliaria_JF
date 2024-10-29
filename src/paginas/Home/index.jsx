import React from 'react';
import LandingA from '../../componentes/LandingA';
import LandingC from '../../componentes/LandingC';
import LandingB from '../../componentes/LandingB';
import './estilos.css';

function Home() {
  return (
    <div className='home'>
      <LandingA />
      <LandingB />
      <LandingC />
    </div>
  )
}

export default Home