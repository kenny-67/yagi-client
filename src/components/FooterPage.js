import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// library.add(faGithubAlt, faFacebook, faTwitter);

const FooterPage = () => {
  return (
    <div>
      <footer className="footer p-3 bottom text-center">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
        <p>KEN_CORP &copy;2020, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default FooterPage;
