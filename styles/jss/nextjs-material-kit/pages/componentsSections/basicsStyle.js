import { grayColor, infoColor, primaryColor, warningColor } from "../../../nextjs-material-kit";
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
  menuItemTextSelected: {
    color: warningColor
  },
  cardArticulo: {
    height: "100%"
  },
  cardHeaderImage: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    "& img": {
      width: "100%",
      height: "200px",
    }
  },
  sectionContacto: {
    marginTop: "3rem"
  },
  justifyContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
  justifyContentEnd: {
    display: "flex",
    justifyContent: "end",
  },
  textField: {
    '& input': {
      border: '2px solid transparent',
      borderRadius: '4px !important',
      '&:hover': {
        border: `2px solid ${infoColor} !important`,
        zIndex: "10"
      },
      '&:focus': {
        border: `2px solid ${warningColor} !important`,
        zIndex: "10"
      },
    }
  },
  buttonSubmit: {
    background: warningColor,
    '&:hover': {
      background: infoColor,
    },
  },
  buttonSubmitDisabled: {
    background: `${grayColor} !important`,
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
