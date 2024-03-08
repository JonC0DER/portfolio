import { spawn } from 'child_process';
import React from 'react';
import MyPic from '../../assets/images/portfolio_picture_id.jpg';
import { JaugeAdds, PresentationType } from '../interfacesTypes';

interface PresentationBoardProps {
  presentationData: PresentationType;
}

const PresentationBoard: React.FC<PresentationBoardProps> = ({
  presentationData,
}) => {
  const jaugeWidth = (width: number) => ({ width: `${width}%` });
  const data = { ...presentationData };

  const presentation = data.presentation;
  const contact = presentation.contact;
  const fullName = `${contact.firstname} ${contact.lastname.toUpperCase()}`;

  const skills = data.skills;
  const { systems, languages, linguistiques } = skills;
  const linguistiquesFormat = Object.entries(linguistiques);
  const codeLanguages = Object.entries(languages);

  const Jauge = ({ jaugeAdds }: { jaugeAdds: JaugeAdds }) => {
    const [items, percent] = jaugeAdds;
    const itemStr = Array.isArray(items) ? items.join(' / ') : 'Str error';
    const percentage = Number(percent.percentage);

    return (
      <div className="skill">
        <p className="percent">
          <span className="bold">{itemStr}</span>
          <span>{percentage}%</span>
        </p>
        <span className="jauge">
          <span className="interne" style={jaugeWidth(percentage)}></span>
        </span>
      </div>
    );
  };

  return (
    <section className="presentation-board">
      <div className="me">
        <figure>
          <img src={MyPic} alt="Somthing" className="picture" />
          <figcaption>{fullName}</figcaption>
        </figure>
        <div className="social-network">
          <h4 className="what-am-i" aria-label="my photo">
            Software developer
          </h4>
          <ul>
            <li>
              <a href={contact.GitHub}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href={contact.linkedin}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-me">
        <h3>Je suis</h3>
        <p>{presentation.profil}</p>
        <br />
      </div>
      <div className="my-languages">
        <h3>Langues</h3>
        {linguistiquesFormat.map(([key, val]) => (
          <div className="languages-container" key={key}>
            <p className="percent">
              <span> {key} </span>
              <span>{val}%</span>
            </p>
            <span className="jauge">
              <span className="interne" style={jaugeWidth(val)}></span>
            </span>
          </div>
        ))}
      </div>
      <div className="systems">
        <h3>Sysèmes</h3>
        <Jauge jaugeAdds={systems as []} />
      </div>
      <div className="skills">
        <h3>Compétences</h3>
        {codeLanguages.map(([key, value]) => (
          <Jauge key={key} jaugeAdds={value as []} />
        ))}
      </div>
      <button className="download-cv">
        DOWNLOAD CV
        <span className="material-symbols-outlined"> download </span>
      </button>
    </section>
  );
};

export default PresentationBoard;
