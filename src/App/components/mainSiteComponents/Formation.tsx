import React from 'react';
import { FormationType } from '../../interfacesTypes';

interface FormationProps {
  formations: FormationType[];
}

const Formation: React.FC<FormationProps> = ({ formations }) => {
  return (
    <section id="formations" className="formations">
      <h2>Mes Formations</h2>
      <p>Ci-dessous mes différentes certifications et diplomes.</p>
      <div className="formations-container">
        {formations.map((formation, key) => (
          <div key={key} className="formation">
            <div className="degre-date">
              <h3>{formation.diploma}</h3>
              <p>
                Etudiant
                <span className="date">{formation.date}</span>
              </p>
            </div>
            <aside>
              <h3>{formation.school}</h3>
              <p>{formation.content}</p>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;
