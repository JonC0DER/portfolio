import React, { useState } from 'react';

export default function Menu() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleClicked = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <section className={`menu ${isToggle ? 'less' : ''}`}>
        <div className="menu-fixed">
          <div className="menu-options">
            <div className="large-small">
              <div
                className={`burger ${isToggle ? 'burger-clicked' : ''}`}
                onClick={toggleClicked}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
            {/* <div className="themes">
              <span className="circle">
                <span className="material-symbols-outlined">dark_mode</span>
              </span>
            </div> */}
          </div>
          <ul>
            <li className="roll">
              <a href="#hero">
                <span className="circle">
                  <span className="material-symbols-outlined">home</span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Home
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#services">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    developer_mode_tv
                  </span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Services
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#freelance-prices">
                <span className="circle">
                  <span className="material-symbols-outlined">payments</span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Prices
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#recommendations">
                <span className="circle">
                  <span className="material-symbols-outlined">recommend</span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Partners
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#formations">
                <span className="circle">
                  <span className="material-symbols-outlined">school</span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Formations
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#experiences">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    work_history
                  </span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Experiences
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#portfolio">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    construction
                  </span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Portfolio
                </span>
              </a>
            </li>
            <li className="roll">
              <a href="#contact">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    contact_mail
                  </span>
                </span>
                <span className={`menu-word ${isToggle ? 'hidden' : ''}`}>
                  Contacts
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
