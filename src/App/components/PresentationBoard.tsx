import React from 'react';
import MyPic from '../../assets/images/portfolio_picture_id.jpg';
import { PresentationType } from '../interfacesTypes';

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
  console.log(languages);

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
        {Object.entries(linguistiques).map(([key, val]) => (
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
      <div className="skills">
        <h3>Compétences</h3>
        {Object.entries(languages).map(([language, value]) => (
          <div key={language} className="skill">
            {Object.entries(value).map(([key, val]) => (
              <div key={key}>
                {val instanceof Array ? (
                  <p>
                    <span className="bold">{val.join(' / ')}</span>
                  </p>
                ) : val instanceof Object ? (
                  <span className="jauge">
                    {Object.entries(val).map(([percentage, valNum]) => (
                      <span
                        key={percentage}
                        className="interne"
                        style={jaugeWidth(valNum)}
                      ></span>
                    ))}
                  </span>
                ) : (
                  <span>Not an Array or Object</span>
                )}
              </div>
            ))}
          </div>
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
