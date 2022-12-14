import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

const social = [
  {
    text: "linkedin",
    link:
      "https://www.linkedin.com/sam_nk_lcf/",
  },
  { text: "instagram", link: "https://www.instagram.com/sam_nk_lcf/" },
  { text: "facebook", link: "https://www.facebook.com/sam_nk_lcf/" },
  // { text: "blog", link: "https://zeyadgohary.tumblr.com/" },
];

const useStyles = makeStyles((theme) => ({
  fullList: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    background: "#fcfcfa",
    justifyContent: "center",
    boxShadow: "0",
  },
  menubutton: {
    position: "absolute",
    right: "20px",
    top: "25px",
    padding: "0px",
    backgroundColor: "transparent",
    border: "0px",
    cursor: "pointer",
  },
  menuLink: {
    textTransform: "capitalize",

    "& h1": {
      position: "relative",
      width: "fit-content",
      letterSpacing: "5px",

      "&:before": {
        position: "absolute",
        content: '""',
        height: "1px",
        bottom: "4px",
        width: "0",
        transition: ".5s",
        background: "#181818",
      },
      [theme.breakpoints.up("md")]: {
        "&:hover:before": {
          width: "100%",
        },
      },
     
    },
  },
  menuList: {
    margin: "0px auto",
    alignSelf: "center",
  },
  menuclose: {
    right: "20px",
    top: "25px",
    padding: "0px",
    paddingTop: "15px",
    backgroundColor: "transparent",
    border: "0px",
  },
  adress: {
    position: "absolute",
    right: "20px",
    top: "10px",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      "& p": {
        margin: "6px 0px",

        textAlign: "right",
      },
    },
  },
  socialList: {
    position: "absolute",
    bottom: "30px",
    display: "flex",
    width: "100vw",
    maxWidth: "800px",
    justifyContent: "space-evenly",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      "& div": {
        padding: "2px 20px",
        textAlign: "left",
      },
      "& a": {
        fontSize: "70%"
      }
    },

  },
}));

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        <button
          className={classes.menubutton}
          onClick={toggleDrawer("right", true)}
        >
          <svg
            className="menu-opener__square"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect y="20" width="4" height="4" fill="currentColor"></rect>
            <rect y="10" width="4" height="4" fill="currentColor"></rect>
            <rect width="4" height="4" fill="currentColor"></rect>
            <rect x="10" y="20" width="4" height="4" fill="currentColor"></rect>
            <rect x="10" y="10" width="4" height="4" fill="currentColor"></rect>
            <rect x="10" width="4" height="4" fill="currentColor"></rect>
            <rect x="20" y="20" width="4" height="4" fill="currentColor"></rect>
            <rect x="20" y="10" width="4" height="4" fill="currentColor"></rect>
            <rect x="20" width="4" height="4" fill="currentColor"></rect>
          </svg>
        </button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          transitionDuration={800}
        >
          <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <div className={classes.adress}>
              <button
                className={classes.menuclose}
                onClick={toggleDrawer("right", true)}
              >
                <svg
                  class="menu-opener__square"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect y="20" width="4" height="4" fill="#616161"></rect>
                  <rect y="10" width="4" height="4" fill="currentColor"></rect>
                  <rect width="4" height="4" fill="#616161"></rect>
                  <rect
                    x="10"
                    y="20"
                    width="4"
                    height="4"
                    fill="#616161"
                  ></rect>
                  <rect
                    x="10"
                    y="10"
                    width="4"
                    height="4"
                    fill="currentColor"
                  ></rect>
                  <rect x="10" width="4" height="4" fill="#616161"></rect>
                  <rect
                    x="20"
                    y="20"
                    width="4"
                    height="4"
                    fill="#616161"
                  ></rect>
                  <rect
                    x="20"
                    y="10"
                    width="4"
                    height="4"
                    fill="currentColor"
                  ></rect>
                  <rect x="20" width="4" height="4" fill="#616161"></rect>
                </svg>
              </button>

              <p>Sam Nk Lcf <br/>D??veloppeur full-stack<br/> UI/UX designer</p>
              <p></p>
              <p></p>
              <p >
              <a href="mailto:samyeyebe@gmail.com">
              samyeyebe@gmail.com
              </a></p>
              <p >
              <a href="tel:+24174570040">
                +241 (0) 74570040
              </a>
              </p>
            </div>

            <List className={classes.menuList}>
              {["R??alisation", "A propos", "contact"].map((text) => (
                <Link className={classes.menuLink} to={`/${text === "realisation" ? "" : text}`} key={text}>
                  <h1 className="font__big">{text}</h1>
                </Link>
              ))}
            </List>
            <Grid container className={classes.socialList}>
              {social.map((item) => (
                <Grid item xs={6} sm={3}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font__red"
                  key={item.text}
                >
                  {item.text}
                </a>
                </Grid>
              ))}
              </Grid>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
