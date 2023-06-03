import { grayColor, primaryColor } from "../../nextjs-material-kit";
import { container } from "/styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    textAlign: "left",
    backgroundImage: "url('/img/BRUSH-3 2.png')",
    backgroundPosition: "right",
    backgroundPositionX: '-50rem',
    backgroundPositionY: '30px',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    color: grayColor,
    display: "inline-block",
    position: "relative",
    marginLeft: '15%'
  },
  subtitle: {
    fontSize: "1.313rem",
    color: "black",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-40px 10px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  noSeparation: {
    padding: '0',
    margin: '0'
  }
};

export default componentsStyle;
