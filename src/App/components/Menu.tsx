import React from 'react'

export default function Menu() {
  return (
    <>
      {/* MENU  */}
      <section className="menu">
        <div className="menu-options">
          <div className="large-small">
            <span className="burger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </div>
          <div className="themes">
            <span className="circle">
              <span className="material-symbols-outlined">dark_mode</span>
            </span>
          </div>
        </div>
        <ul>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">home</span>   
            </span>
            <span className="menu-word">Home</span>
          </li>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">developer_mode_tv</span>
            </span>
            <span className="menu-word">Services</span>
          </li>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">payments</span>
            </span>
            <span className="menu-word">Prices</span>
          </li>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">recommend</span>
            </span>
            <span className="menu-word">Partners</span>
          </li>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">school</span>
            </span>
            <span className="menu-word">Formations</span>
          </li>
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">work_history</span>
            </span>
            <span className="menu-word">Experiences</span>
          </li> 
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">construction</span>
            </span>
            <span className="menu-word">Portfolio</span>
          </li> 
          <li className="roll">
            <span className="circle">
              <span className="material-symbols-outlined">contact_mail</span>
            </span>
            <span className="menu-word">Contacts</span>
          </li>
        </ul>
      </section>
    </>
  )
}
