import React from 'react';

export default function Services() {
  return (
    <>
      {/* services  */}
      <section id="services" className="services">
        <h2>Mes Services</h2>
        <p>
          Bienvenue dans mon univers numérique ! Ou je donne vie à vos idées.
          Que vous souhaitiez créer une application web comme mobile, un blog
          dynamique ou une boutique en ligne, je suis là pour vous accompagner à
          chaque étape du processus.
        </p>
        <div className="services-container">
          <div className="service">
            <div className="sprite web-dev"></div>
            <h3 className="title">Web Développment</h3>
            <p className="description">Application, Blog, E-commerce</p>
          </div>
          <div className="service">
            <div className="sprite web-design"></div>
            <h3 className="title">Maquettage</h3>
            <p className="description">Figma, Gimp, PhotoShop</p>
          </div>
          <div className="service">
            <div className="sprite back-end"></div>
            <h3 className="title">Développement Back-End</h3>
            <p className="description">Python (Flask), Adonis.js</p>
          </div>
          <div className="service">
            <div className="sprite dev-mobile"></div>
            <h3 className="title">Développement Mobile</h3>
            <p className="description">Avec React-Native</p>
          </div>
          <div className="service">
            <div className="sprite game-dev"></div>
            <h3 className="title">Gaming Application</h3>
            <p className="description">JavaScript / TypeScript PhaserJS</p>
          </div>
          <div className="service">
            <div className="sprite autre"></div>
            <h3 className="title">Autres</h3>
            <p className="description">En discuter ne nous fera pas de mal !</p>
          </div>
        </div>
      </section>
    </>
  );
}
