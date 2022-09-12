import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";

import SocialIcons from "../components/layout/SocialIcons";
// Animation
import { play, exit } from "../gsapAnimation/contactAnimation";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    width: "75vw",
    margin: "15vh  0 5vh 25vw",
    [theme.breakpoints.down("md")]: {
      margin: "0px auto 20px auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      "& div": {
        padding: "10px 0",
      },
    },
    "& p": {
      margin: "0",
    },
    "& hr": {
      margin: "10vh 0",
      [theme.breakpoints.down("md")]: {
        margin: "5vh 0",
      },
    },
    "& h2": {
      display: "inline-flex",
      minWidth: "20px",
    },
    "& input": {
      height: "30px",
      width: "15vw",
      backgroundColor: "transparent",
      border: "1px solid #fff",
      boxShadow: "0",
      paddingLeft: "5px",
      color: "#fff",

      [theme.breakpoints.down("sm")]: {
        width: "70vw",
      },
    },
  },
  arrow: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
    },
  },
}));

export default function Contactform(props) {
  const classes = useStyles();

  var str = "Contact.";
  var res = str.split("");
  return (
    <>
      <Grid container spacing={0} className={`${classes.gridDiv} `}>
        <Grid item xs={12} sm={12} lg={10}>
          <a href="mailto:samyeyebe@gmail.com">
            {!isMobile && (
              <>
                <div
                  className=" contact__header"
                  onMouseEnter={(node) => play()}
                  onMouseLeave={(node) => exit()}
                >
                  {res.map((letter, index) => (
                    <h2 className="contact__letter font__big" key={index}>
                      {letter}
                    </h2>
                  ))}
                </div>
                <h2>Merci pour la visite</h2>
              </>
            )}
            {isMobile && (
              <>
                <div
                  className=" contact__header"
                  style={{ display: "inline-flex" }}
                >
                  <h2 className="contact__letter font__big">{str}</h2>
                </div>
                <div>
                  {" "}
                  <span>Cliquez sur contact.</span>
                </div>
              </>
            )}
            <br />
          </a>
          <hr />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <h2>Réseaux</h2>
          <SocialIcons />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <h2>Contact</h2>
          <p>
            <a href="mailto:samyeyebe@gmail.com">samyeyebe@gmail.com</a>
          </p>
          <p>
            <a href="tel:+24174570040">+241 (0) 74570040</a>
          </p>
        </Grid>

        <Grid item xs={12} sm={12} lg={10}>
          <hr />
          <p>&copy; Sam Nk Lcf</p>
        </Grid>
      </Grid>
    </>
  );
}
