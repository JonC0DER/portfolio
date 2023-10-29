import React from 'react';

export default function Contacts() {
  return (
    <>
      {/* CONTACT  */}
      <section id="contact" className="contact">
        <form action="" method="post">
          <h2>Laissez moi un message</h2>
          <div className="form-container">
            <p>
              <label htmlFor="fullname">Votre nom</label>
              <input type="text" id="fullname" />
            </p>
            <p>
              <label htmlFor="youremail">Votre e-mail</label>
              <input type="email" id="youremail" />
            </p>
            <p>
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" />
            </p>
            <p>
              <label htmlFor="yourmsg">Votre message</label>
              <textarea
                id="yourmsg"
                name="yourmsg"
                rows={5}
                cols={40}
              ></textarea>
            </p>
            <button className="send-message">Envoyez</button>
          </div>
        </form>
        <aside className="contact-infos">
          <h2>Information</h2>
          <div className="info email">
            <span className="material-symbols-outlined">mail</span>
            <p>
              E-mail: <span>jeanfrancoisjonathan@gmail.com</span>
            </p>
          </div>
          <div className="info tel">
            <span className="material-symbols-outlined">call</span>
            <p>
              Tel: <span>+33 6 29 25 59 50</span>
            </p>
          </div>
          <div className="info linkedin">
            <span className="material-symbols-outlined">public</span>
            <p>
              Linkedin: <span>...</span>
            </p>
          </div>
          <div className="info github">
            <span className="material-symbols-outlined">code</span>
            <p>
              GitHub:
              <span>
                <a href="https://github.com/JonC0DER">
                  https://github.com/JonC0DER
                </a>
              </span>
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
