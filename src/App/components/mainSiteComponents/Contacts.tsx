import React from 'react';

export default function Contacts() {
  const sendMsg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section id="contact" className="contact">
        {/* <form action="" method="post">
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
            <p className="textarea">
              <label htmlFor="yourmsg">Votre message</label>
              <textarea
                id="yourmsg"
                name="yourmsg"
                rows={1}
                cols={40}
              ></textarea>
            </p>
            <button className="send-message" onClick={sendMsg}>
              Envoyez
            </button>
          </div>
        </form> */}
        <aside className="contact-infos">
          <h2>Information</h2>
          <div className="info-container">
            <div className="info email">
              <p className="icon">
                <span className="material-symbols-outlined">mail</span>
              </p>
              <p className="content-text">
                <span className="label-text"> E-mail: </span>
                <span>jeanfrancoisjonathan@gmail.com</span>
              </p>
            </div>
            <div className="info tel">
              <p className="icon">
                <span className="material-symbols-outlined">call</span>
              </p>
              <p className="content-text">
                <span className="label-text">Tel:</span>
                <span>+33 6 29 25 59 50</span>
              </p>
            </div>
            <div className="info linkedin">
              <p className="icon">
                <span className="material-symbols-outlined">public</span>
              </p>
              <p className="content-text">
                <span className="label-text"> Linkedin: </span>
                <span>
                  <a href="https://www.linkedin.com/in/jonathan-jean-francois-03659bb8/">
                    https://linkedin/jean-francois/
                  </a>
                </span>
              </p>
            </div>
            <div className="info github">
              <p className="icon">
                <span className="material-symbols-outlined">code</span>
              </p>
              <p className="content-text">
                <span className="label-text"> GitHub: </span>
                <span>
                  <a href="https://github.com/JonC0DER">
                    https://github.com/JonC0DER
                  </a>
                </span>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
