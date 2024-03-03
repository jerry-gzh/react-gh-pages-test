import React from 'react';
import './Home.css';
import Timer from './timer';
import Portada from '../../assets/portada.png'

const Home = () => {
  return(
    <section>
      <div id='title' className='home'>
        <img className='home__img' src={Portada} alt="Imagen desde Local"/>
        <h3>Falta:</h3>
        <div id='timer'>
          <Timer id='timers'/>
        </div>
      </div>
    </section>
  )
}

export default Home 
