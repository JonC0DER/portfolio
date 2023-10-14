import React from 'react';

export default function Services() {
  return (
    <>
      {/* services  */}
      <section id="services" className="services">
        <h2>Mes Services</h2>
        <p>
          Lorem ipsum sed cupiditate eum, veniam quod quasi totam eos corporis
          culpa. Nostrum tempore accusantium ducimus cupiditate!
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
            <h3 className="title">Autres</h3>
            <p className="description">
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
