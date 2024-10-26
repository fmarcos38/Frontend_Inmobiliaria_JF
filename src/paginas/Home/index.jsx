import React from 'react';
import LandingA from '../../componentes/LandingA';
import LandingB from '../../componentes/LandingB';
import './estilos.css';

function Home() {
  return (
    <div className='home'>
      <LandingA />
      <LandingB />
    </div>
  )
}

export default Home