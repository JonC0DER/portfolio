import React from 'react';

export default function Menu() {
  const spansMenuWord = document.querySelectorAll('span.menu-word');

  const toggleSpansWord = () => {
    spansMenuWord.forEach((span) => {
      span.classList.toggle('hidden');
    });
  };

  const burgerClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    const burgerClasses = event.currentTarget.classList;
    burgerClasses.toggle('burger-clicked');
    toggleSpansWord();
  };

  return (
    <>
      {/* MENU  */}
      <section className="menu">
        <div className="menu-fixed">
          <div className="menu-options">
            <div className="large-small">
              <div className="burger" onClick={burgerClicked}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
            <div className="themes">
              <span className="circle">
                <span className="material-symbols-outlined">dark_mode</span>
              </span>
            </div>
          </div>
          <ul>
            <li className="roll">
              <a href="#hero">
                <span className="circle">
                  <span className="material-symbols-outlined">home</span>
                </span>
                <span className="menu-word">Home</span>
              </a>
            </li>
            <li className="roll">
              <a href="#services">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    developer_mode_tv
                  </span>
                </span>
                <span className="menu-word">Services</span>
              </a>
            </li>
            <li className="roll">
              <a href="#freelance-prices">
                <span className="circle">
                  <span className="material-symbols-outlined">payments</span>
                </span>
                <span className="menu-word">Prices</span>
              </a>
            </li>
            <li className="roll">
              <a href="#recommendations">
                <span className="circle">
                  <span className="material-symbols-outlined">recommend</span>
                </span>
                <span className="menu-word">Partners</span>
              </a>
            </li>
            <li className="roll">
              <a href="#formations">
                <span className="circle">
                  <span className="material-symbols-outlined">school</span>
                </span>
                <span className="menu-word">Formations</span>
              </a>
            </li>
            <li className="roll">
              <a href="#experiences">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    work_history
                  </span>
                </span>
                <span className="menu-word">Experiences</span>
              </a>
            </li>
            <li className="roll">
              <a href="#portfolio">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    construction
                  </span>
                </span>
                <span className="menu-word">Portfolio</span>
              </a>
            </li>
            <li className="roll">
              <a href="#contact">
                <span className="circle">
                  <span className="material-symbols-outlined">
                    contact_mail
                  </span>
                </span>
                <span className="menu-word">Contacts</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
