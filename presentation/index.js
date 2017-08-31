// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

// const images = {
//   bg: require("../assets/bg_skyline.svg"),
//   logo: require("../assets/logo-seattlejsconference.svg"),
//   logoAlexa: require("../assets/logo-alexa.svg"),
//   logoImdb: require("../assets/logo-IMDb.svg"),
//   logoFormidable: require("../assets/logo-formidable.svg"),
//   logoMicrosoft: require("../assets/logo-microsoft.svg"),
//   logoZillow: require("../assets/logo-zillow.svg"),
//   logoGalvanize: require("../assets/logo-galvanize.svg"),
//   logoAppSheet: require("../assets/logo-appsheet.svg"),
//   logoGoDaddy: require("../assets/logo-godaddy.svg"),
//   logoNpm: require("../assets/logo-npm.svg"),
//   logoSitepen: require("../assets/logo-sitepen.svg"),
//   logoIndeed: require("../assets/logo-indeed.png"),
//   logoOpenDoor: require("../assets/logo-opendoor.svg"),
//   logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
//   logoSendGrid: require("../assets/logo-sendgrid.svg"),
//   logoTwitter: require("../assets/logo-twitter.svg"),
//   logoUnbounce: require("../assets/logo-unbounce.png")
// };

// preloader(images);

export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    };



    return (
      <Deck
        autoplay
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide style={skylineBg}>
          <Text textFont="monospace" margin="auto auto 5em auto">
            10-16 August 2017
          </Text>
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Presenting Sponsor")}
        </Slide>
      </Deck>
    );
  }
}
