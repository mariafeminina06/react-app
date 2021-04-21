import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="credit">
        Coded by: <br />
        Maria Feminina Escalante
      </div>
      <a
        href="https://www.linkedin.com/in/maria-feminina-escalante-kok-67437b91"
        target="_blank"
        rel="noreferrer"
      >
        <button className="contact">
          <img
            src="https://www.learnearnretire.com/hs-fs/hubfs/linkedin.png?width=1024&name=linkedin.png"
            className="linkedin"
            alt="find me on linkedin"
          />
        </button>
      </a>
      <br />
      <a
        href="https://github.com/mariafeminina06/react-app"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        View Source Code
      </a>
    </div>
  );
}
