import React from 'react';
import { MiniaturePortfolioType } from '../../interfacesTypes';

interface MiniaturesProps {
  miniatures: MiniaturePortfolioType[];
}

const Portfolio: React.FC<MiniaturesProps> = ({ miniatures }) => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <p>
          Bienvenue dans mon portfolio, où je mets en lumière mes compétences.
          N&apos;hésitez pas à explorer certains de mes projets directement pour
          en savoir plus.
        </p>
        <ul className="portfolio-menu">
          <li>All Categories</li>
          <li>UI Design</li>
          <li>Front-end</li>
          <li>Full-Stack</li>
          <li>Scripting</li>
        </ul>
        <div className="portfolio-container">
          <figure>
            <img src="" alt="" />
            <video src=""></video>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
