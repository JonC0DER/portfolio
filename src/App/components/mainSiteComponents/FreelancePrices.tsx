import React from 'react';
import { DevOptions, DevPrices } from '../../interfacesTypes';

export default function FreelancePrices() {
  const devOptions: DevOptions = {
    Maquettage: true,
    'HTML/CSS': true,
    'JavaScript/TypeScript': true,
    React: true,
    Redux: true,
    'React-Native': false,
    SQL: false,
    Python: false,
    PHP: false,
  };

  const prices: DevPrices[] = [
    {
      title: 'Associations',
      price: '150',
      desc: 'Lorem ipsum dolor. Culpa reiciendis laudantium praesentium quisqua',
      options: devOptions,
    },
    {
      title: 'P.M.E',
      price: '300',
      desc: 'Lorem ipsum dolor. Culpa reiciendis laudantium praesentium quisqua',
      options: devOptions,
    },
    {
      title: 'Grande Entreprise',
      price: '450',
      desc: 'Lorem ipsum dolor. Culpa reiciendis laudantium praesentium quisqua',
      options: devOptions,
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
              <button className="order">VOTRE CHOIX</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
