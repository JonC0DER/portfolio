import React from 'react';
import { ExperienceType } from '../../interfacesTypes';

interface ExperiencesProps {
  experiences: ExperienceType[];
}
const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  return (
    <>
      {/* experiences */}
      <section id="experiences" className="experiences">
        <h2>Expériences</h2>
        <p>
          Petit résumé de mes expériences de développement d&apos;application.
          Faite vous une idée claire en les consultant.
        </p>
        <div className="experiences-container">
          <div className="experience">
            <div className="experience-date">
              <h3>University of Toronto</h3>
              <p>
                Student
                <span className="date">Jan 1998 - Dec 2001</span>
              </p>
            </div>
            <aside>
              <h3>Certificate of Web</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam, adipisci ut reprehenderit voluptatem repellat sequi eius
                modi, rem deserunt unde illum ullam itaque voluptas illo fugiat
                dolore iste ipsum nostrum!
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
