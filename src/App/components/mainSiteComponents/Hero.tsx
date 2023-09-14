import React from 'react';
import HeroImg from '../../../assets/images/h.png';

function Hero() {
  return (
    <>
      {/* hero  */}
      <div className="hero">
        <div className="hero-text">
          <h1 className="i-am">
            Jonathan Jean-François <br />
            <span className="fron-end">Front-End</span> Développeur
          </h1>
          <p className="presentation">
            Je suis organisé, fiable et sans bugs !
            <br />
            flexibilité, créativité, esprit d'équipe.
          </p>
          <button className="hire-me">
            <span className="btn-hire-me">ENGAGEZ-MOI</span> 
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <figure>
          <img src={HeroImg} alt="john!" />
        </figure>
      </div>
    </>
  )
}

export default Hero