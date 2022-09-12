import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Layout from "../components/layout/layout";
import ThreeCol from "../components/threeColumn";
import ServiceHeader from "../components/serviceHeader";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";
import ContactForm from "../components/contactform";

// Data
import OneSmall from "../images/Zeyad Gohary.jpeg";
import OneMed from "../images/Zeyad Gohary.jpeg";
import OneLarge from "../images/Zeyad Gohary.jpeg";

import TwoSmall from "../images/Personal/05_360.jpeg";
import TwoMed from "../images/Personal/05_720.jpeg";
import TwoLarge from "../images/Personal/05_1440.jpg";

// Animation & Function

import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import data from "../data/about.json";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    paddingTop: "20vh",
    width: "75vw",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10vh",
      width: "90vw",

    },

    "& img": {
      width: "100%",
    },
  },
  list: {
    columnCount: "3",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      columnCount: "2",
    },
    [theme.breakpoints.down("sm")]: {
      columnCount: "1",
    },
  },
}));

function About(props) {
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflowY = "unset";
    onLoad();
    onResize();

    return () => {
      document.body.style.overflowY = "unset";
      document.body.style.height = "unset";
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <Layout pageTitle="A propos de moi" description={data.description}></Layout>

      <Viewport>
        <ServiceContent>
          <ServiceHeader page={data} 
                      imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
          />

          <ThreeCol data={data} trigger="team-col" />

          <Grid container spacing={4} className={classes.gridDiv}>
            <Grid item xs={12}>
            <hr />
            <br />

              <img
                className={`workproject__img ${classes.image}`}
                src={OneSmall}
                alt="sam nk"
                title="Sam Nk Lcf"
                srcSet={`${OneSmall} 360w, ${OneMed} 720w, ${OneLarge} 1440w`}
                sizes="40vw"
              />
            </Grid>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
              <b>Parcours</b>
              </span>
              <p>
                Lycée Paul Emane Eyeghe<br /> Baccaloriat
                Septembre 2020 
              </p>
              <p>
                Université Omar Bongo <br /> Novembre 2020 - Janvier 2022
                
              </p>
              <p>
                ECOLE 241 <br /> Février 2022 - Septempbre 2022
                
              </p>
            </Grid>
            
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Mon parcours</b>
              </span>
            </Grid>

            <ul>
              <li style={{ listStyle: "none" }}>
                <p>
                HTML et CSS -------------------------(100%)
                </p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Javascript --------------------------(90%)</p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Python -----------------------------(90%)</p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Django --------------------------(80%)</p>
              </li>
              <li style={{ listStyle: "none" }}>
                  <p>React js ----------------(60%)</p>{" "}
              </li>
              <li style={{ listStyle: "none" }}>
                <p>
                Electron js/ Desktop app ---------(70%)
                </p>
              </li>
            </ul>
          </Grid>
          <ContactForm />
        </ServiceContent>
      </Viewport>
    </>
  );
}

export default About;
