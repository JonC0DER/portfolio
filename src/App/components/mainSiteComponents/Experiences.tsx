import React from 'react';
import { ExperienceType } from '../../interfacesTypes';

interface ExperiencesProps {
  experiences: ExperienceType[];
}
const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  return (
    <section id="experiences" className="experiences">
      <h2>Expériences</h2>
      <p>
        Petit résumé de mes expériences de développement d&apos;application.
        Faite vous une idée claire en les consultant.
      </p>
      <div className="experiences-container">
        {experiences.map((xp, key) => (
          <div key={key} className="experience">
            <div className="experience-date">
              <h3>{xp.entreprise}</h3>
              <p>
                <span> Mission </span>
                <span className="date">{xp.date}</span>
              </p>
              <p>
                <span>Technos: </span>
                <span className="technos">{xp.technologies.join(' / ')}</span>
              </p>
            </div>
            <aside>
              <h3>{xp.project}</h3>
              <p> {xp.description} </p>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
