import React from 'react';

function Formation() {
  return (
    <>
      {/* formations  */}
      <section id="formations" className="formations">
        <h2>Mes Formations</h2>
        <p>Ci-dessous mes différentes certifications et diplomes.</p>
        <div className="formations-container">
          <div className="formation">
            <div className="degre-date">
              <h3>Bac + x</h3>
              <p>
                Mission
                <span className="date">Jan 2021 - Mars 2022</span>
              </p>
            </div>
            <aside>
              <h3>OpenClassrooms</h3>
              <p>Réalisation de ... avec ... etc.</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formation;
