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
  const presentationDatas = { ...presentationData };

  return (
    <>
      <section className="presentation-board">
        <div className="me">
          <figure>
            <img src={MyPic} alt="Somthing" className="picture" />
            <figcaption>Jonathan JEAN-FRANCOIS</figcaption>
          </figure>
          <div className="social-network">
            <h4 className="what-am-i" aria-label="my photo">
              Front-end developer
            </h4>
            <ul>
              <li>
                <a href="">
                  <i></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-me">
          <h3>Je suis</h3>
          <p>
            Polyvalent et adaptable car venant du monde réseau informatique et
            étant un inconditionnel des systèmes Linux, mes compétences en code
            serait un plus à votre entreprise tout en poursuivant mon évolution
            full-stack vers M.E.R.N, React-Native et leur équivalent python.
          </p>
          <br />
        </div>
        <div className="my-languages">
          <h3>Languages</h3>
          <p className="percent">
            <span> Français </span>
            <span>98%</span>
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(98)}></span>
          </span>
          <p className="percent">
            <span>Anglais</span>
            <span>58%</span>
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(58)}></span>
          </span>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <p>
            <span className="bold">HTML / CSS /</span>
            Bootstrap
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(92)}></span>
          </span>
          <p>
            <span className="bold">JavaScript ES6:</span>
            <br />
            TypeScript, React, Redux, NodeJS, AdonisJS
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(88)}></span>
          </span>
          <p>
            <span className="bold">SQL:</span>
            <br />
            MySQL, PostgreSQL, Oracle
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(62)}></span>
          </span>
          <p>
            <span className="bold">Versioning:</span>
            <br />
            GIT, GitHub
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(50)}></span>
          </span>
        </div>
        <div className="extra-skills">
          <h3>Extra Skills</h3>
          <p>
            <span className="bold">Python:</span>
            <br />
            Flask, JupiterLab
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(70)}></span>
          </span>
          <p>
            <span className="bold">Notions:</span>
            <br />
            PHP, MVC, Bash, Serveurs( Apache / Ngnix )
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(43)}></span>
          </span>
          <p>
            <span className="bold">Systèmes:</span>
            <br />
            Linux, Unix
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(90)}></span>
          </span>
          <p>
            <span className="bold">Maquettage:</span>
            <br />
            Figma, GIMP, PhotoShop
          </p>
          <span className="jauge">
            <span className="interne" style={jaugeWidth(55)}></span>
          </span>
        </div>
        <button className="download-cv">
          DOWNLOAD CV
          <span className="material-symbols-outlined"> download </span>
        </button>
      </section>
    </>
  );
};

export default PresentationBoard;
