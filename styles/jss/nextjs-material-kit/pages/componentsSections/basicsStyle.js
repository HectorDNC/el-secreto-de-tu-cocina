import { primaryColor } from "../../../nextjs-material-kit";
import { container, title } from "/styles/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "/styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  titleBackground: {
    backgroundImage: "url('/img/BRUSH-3 2.png')",
    backgroundPosition: "center",
    backgroundPositionX: "50%",
    backgroundPositionY: "25px",
    backgroundSize: "25%",
    backgroundRepeat: "no-repeat",
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  menuItemText: {
    color: primaryColor
  },
  cardArticulo: {
    height: "100%"
  },
  cardHeaderImage: {
    display:"flex",
    justifyContent: "center",
    alingItems: "center",
    "& img": {
      width: "100%",
      height: "150px",
    } 
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
