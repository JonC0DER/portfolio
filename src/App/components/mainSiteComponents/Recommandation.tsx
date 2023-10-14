import React from 'react';

function Recommandation() {
  return (
    <>
      {/* recommandations */}
      <section id="recommendations" className="recommendations">
        <h2>Recommendations</h2>
        <p>
          Pour être bien plus a votre aise avant de travailler ensemble, voici
          les recommendations de partenaires avec lesquels j&apos;ai eu le
          plaisir de collaborer sur des projets tous aussi différents
          qu&apos;intéressants.
        </p>
        <div className="recommandation-container">
          <div className="recommander">
            <p className="stars">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </p>
            <h4 className="title"></h4>
            <p className="comment"></p>
            <div className="identity">
              <figure>
                <img src="#" alt="#" />
              </figure>
              <p>
                <span className="bold"></span>
                <span className="low-gray"></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommandation;
