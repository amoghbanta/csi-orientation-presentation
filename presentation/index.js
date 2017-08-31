// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
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

const images = {
    bg: require("../assets/bg_skyline.svg"),
    amogh: require("../assets/image_transparent.png"),
    logoIndeed: require("../assets/logo-indeed.png"),
    logoTwitter: require("../assets/logo-twitter.svg"),
    logoGithub: require("../assets/logo-github.svg"),
    logoChrome: require("../assets/logo-chrome.svg")
};

preloader(images);

export default class Presentation extends React.Component {
    renderHeading(text) {
        return (
            <Heading
                size={5}
                fit
                bold
                caps
                textColor="white"
                style={{letterSpacing: "0.05em"}}
            >
                {text}
            </Heading>
        );
    }

    renderListItem(text) {
        return (
            <ListItem
                textColor="white"
                margin="auto auto 1em auto">
                {text}
            </ListItem>
        );
    }

    renderText(text) {
        return (
            <Text
                bold
                textColor="white">
                {text}
            </Text>
        );
    }

    render() {

        return (
            <Deck
                progress="pacman"
                theme={theme}
                transition={["slide"]}
                transitionDuration={200}>
                <Slide bgImage={images.bg} bgDarken={0.65}>
                    <Image width="20%" src={images.amogh}/>
                    <Text textColor="white" textFont="monospace" margin="auto auto 5em auto">
                        Hi, I am Amogh
                    </Text>
                    <Text textColor="white" textFont="monospace" margin="auto auto 5em auto">
                        I work as a front-end engineer at this company called DigiCred
                    </Text>
                    <Layout>
                        <Fill>
                            <Text textColor="secondary" style={{margin: "1.25rem auto 0"}}>
                                <Link href="https://github.com/amoghbanta">
                                    <Image
                                        height="1.5em"
                                        src={images.logoGithub}
                                        style={{verticalAlign: "middle"}}
                                    />
                                    {" amoghbanta"}
                                </Link>
                            </Text>
                        </Fill>
                        <Fill>
                            <Text textColor="secondary" style={{margin: "1.25rem auto 0"}}>
                                <Link href="https://twitter.com/amoghbanta">
                                    <Image
                                        height="1.5em"
                                        src={images.logoTwitter}
                                        style={{verticalAlign: "middle"}}
                                    />
                                    @amoghbanta
                                </Link>
                            </Text>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="#333">
                    <Text textColor="white" margin="auto auto 5em auto">
                        I hate creating presentations and documentation in general (like any other developer).
                    </Text>
                    <Appear fid="2">
                        <Text textColor="white" margin="auto auto 5em auto">
                            So, to make this fun, and try something new, I wrote this presentation in JavaScript using a
                            framework called
                            React.js and a library called Spectacle.
                        </Text>
                    </Appear>
                    <Appear fid="3">
                        <Text textColor="white" margin="auto auto 5em auto">
                            P.S.: You'll create a lot of presentations and reports in next 4 years and most of them will
                            be rejected because the font size of heading on page 2 will not be same as the heading on
                            page 9.
                        </Text>
                    </Appear>
                    <Layout>
                        <Appear fid="4">
                            <Fill>
                                <Text textColor="secondary" style={{margin: "1.25rem auto 0"}}>
                                    <Link href="https://github.com/amoghbanta/csi-orientation-presentation">
                                        <Image
                                            height="1.5em"
                                            src={images.logoGithub}
                                            style={{verticalAlign: "middle"}}
                                        />
                                        {" Code for this presentation."}
                                    </Link>
                                </Text>
                            </Fill>
                        </Appear>
                        <Appear fid="5">
                            <Fill>
                                <Text textColor="secondary" style={{margin: "1.25rem auto 0"}}>
                                    <Link href="http://csi-freshmen-2017.surge.sh/">
                                        <Image
                                            height="1.5em"
                                            src={images.logoChrome}
                                            style={{verticalAlign: "middle"}}
                                        />
                                        {" Link for this presentation."}
                                    </Link>
                                </Text>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderText("I know most of you are here because you screwed your JEE and U.P.E.S. was your plan B/C/D/E...!")}
                    <Appear fid="1">
                        {this.renderText("Well, It doesn't makes much difference at the end of 4 years. No one will care from where your are, all everyone wants to know is what you are capable of.")}
                    </Appear>
                    <Appear fid="2">
                        {this.renderText("P.S. Ground rule remains the same, you will always hate your college and your friends will always make you realize that your college is better than their's.")}
                    </Appear>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("What your next 4 years will be like:")}
                    <List ordered start={1} type="1">
                        <Appear fid="1">
                            {this.renderListItem("Please proxy laga diyo yaar, raat bhar C.S. khel raha tha, next class me main pakka laga dunga.")}
                        </Appear>
                        <Appear fid="2">
                            {this.renderListItem("Yaar, massbunk kare kya aaj?")}
                        </Appear>
                        <Appear fid="3">
                            {this.renderListItem("Bhai kuch ni aata, please kuch bata de nahi to fail ho jaunga.")}
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("What your next 4 years will be like:")}
                    <List ordered start={4} type="1">
                        {this.renderListItem("Game of Thrones ka latest episode download kiya kya?")}
                        <Appear fid="5">
                            {this.renderListItem("3 class aur attend karne par attendance 67% ho jayegi, uske baad medical certificate de dunga!")}
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("Things that I realize now:")}
                    <List ordered start={1} type="1">
                        <Appear fid="1">
                            {this.renderListItem("You will be taught 1 year worth of content in next 4 years.")}
                        </Appear>
                        <Appear fid="2">
                            {this.renderListItem("You'll have plenty of time to practice your hobbies/interests and follow your passions.")}
                        </Appear>
                        <Appear fid="3">
                            {this.renderListItem("The earlier you sync your life with your interests, the better it is.")}
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("Things that I realize now:")}
                    <List ordered start={4} type="1">
                        {this.renderListItem("Its not the college or placement guys or anyone else that makes you successful, its you who make them what they are known for.")}
                        <Appear fid="1">
                            {this.renderListItem("Listen to everything and everyone but respond to selective.")}
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("Things you should definitely do in coming 4 years:")}
                    <List ordered start={1} type="1">
                        <Appear fid="1">
                            {this.renderListItem("Learn how to learn. You can find a course to on Coursera by the same name, which might be helpful.")}
                        </Appear>
                        <Appear fid="2">
                            {this.renderListItem("At least give a try to everything that interests you.")}
                        </Appear>
                        <Appear fid="3">
                            {this.renderListItem("Spend first 2 years to test the waters and make a plan and last 2 to follow that plan.")}
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="#333">
                    {this.renderHeading("Things you should definitely do in coming 4 years:")}
                    <List ordered start={4} type="1">
                        {this.renderListItem("Whatever you do in these 4 years, be original and don't be sheep.")}
                        <Appear fid="5">
                            {this.renderListItem("Try to make an earning doing something you love. This will give you confidence to take risks.")}
                        </Appear>
                    </List>
                </Slide>
            </Deck>
        );
    }
}