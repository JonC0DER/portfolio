import React from 'react'

export default function FreelancePrices() {
  return (
    <>
      {/* freelance prices  */}
      <section className="freelance-prices">
        <h2>Freelance prix / jour</h2>
        <p></p>
        <div className="price-per-antity">
          <h3>Associations</h3>
          <p>
            <span className="bold-price"></span>
            <p className="price-description"></p>
            <p className="options"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></p>
          </p>
          <button className="order"></button>
        </div>
        <div className="price-per-antity">
          <h3>Petite/Moyenne Entreprise</h3>
          <p>
            <span className="bold-price"></span>
            <p className="price-description"></p>
            <p className="options"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></p>
          </p>
          <button className="order"></button>
        </div>
        <div className="price-per-antity">
          <h3>Grande Entreprise / StartUp</h3>
          <p>
            <span className="bold-price"></span>
            <p className="price-description"></p>
            <p className="options"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></p>
          </p>
          <button className="order"></button>
        </div>
      </section>
    </>
  )
}
