import React from 'react';
import { DevOptions, DevPrices } from '../../interfacesTypes';

export default function FreelancePrices() {
  const simpleOptions: DevOptions = {
    Maquettage: true,
    'Web ou Mobile': true,
    'Base de données': true,
  };

  const middleOptions: DevOptions = {
    WordPress: true,
    'HTML/CSS': true,
    'JavaScript/TypeScript': true,
    'Python ou PHP': true,
  };

  const devOptions: DevOptions = {
    'React, Redux-toolkit': true,
    'React-Native': true,
    'SQL + MySQL PostgreSQL': true,
  };

  const prices: DevPrices[] = [
    {
      title: 'Associations',
      price: '150',
      desc: "Je m'adapte pour fournir des résultats exceptionnels aux associations, malgré leurs ressources limitées.",
      options: {
        ...simpleOptions,
      },
    },
    {
      title: 'P.M.E',
      price: '300',
      desc: '',
      options: {
        ...simpleOptions,
        ...middleOptions,
      },
    },
    {
      title: 'Grande Entreprise',
      price: '450',
      desc: '',
      options: {
        ...middleOptions,
        ...devOptions,
      },
    },
  ];

  return (
    <>
      {/* freelance prices  */}
      <section id="freelance-prices" className="freelance-prices">
        <h2>Freelance prix / jour</h2>
        <p>
          Un grand sens de l&apos;équité pour un monde meilleur. <br />
          Pour cette raison je ne peut exercé le même tarif pour toutes les
          antitées.
        </p>
        <div className="price-container">
          {prices.map((elem: DevPrices, key: number) => (
            <div key={key} className="price-per-antity">
              <h3>{elem.title}</h3>
              <div>
                <span className="bold-price">€ {elem.price}.00</span> /Jour
                <p className="price-description">{elem.desc}</p>
                <p className="options">
                  {Object.entries(elem.options).map(([objKey, val], index) => (
                    <span className="line-option" key={index}>
                      {val ? (
                        <span className="material-symbols-outlined yellow">
                          done
                        </span>
                      ) : (
                        <span className="material-symbols-outlined gray">
                          close
                        </span>
                      )}
                      <span className={`option-key ${val ? 'lblack' : 'gray'}`}>
                        {objKey}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
              {/* <button className="order">VOTRE CHOIX</button> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
