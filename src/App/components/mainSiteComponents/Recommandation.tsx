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
        <div className="recommendation-container">
          <div className="recommender">
            <p className="stars">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </p>
            <h4 className="title">Title!</h4>
            <p className="comment">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nesciunt ipsum sunt quis! Nobis error accusantium cupiditate,
              explicabo neque officiis.
            </p>
            <div className="identity">
              <figure>
                {/*<img src="#" alt="#" />*/}
                <span className="material-symbols-outlined">person</span>
              </figure>
              <p>
                <span className="bold">John Doe</span>
                <span className="low-gray">Back-end PHP</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommandation;
