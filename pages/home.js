import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionArticulos from "/pages-sections/Home-Sections/SectionArticulos.js";
import SectionTypography from "/pages-sections/Home-Sections/SectionTypography.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { Grid } from "@material-ui/core";
import SectionContacto from "../pages-sections/Home-Sections/SectionContacto";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax image="/img/hero.png">
        <div>
          <Grid container className={classes.noSeparation}>
            <GridItem>
              <h1 className={classes.title}>Logo</h1>
            </GridItem>
            <GridItem className={classes.noSeparation}>
              <div className={classes.brand}>
                <h1 className={classes.title}>El Secreto <br /> de  tu Cocina</h1>
              </div>
            </GridItem>
          </Grid>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionArticulos />
        <SectionContacto />
        {/* <SectionBasics /> */}
      </div>
      <Footer />
    </div>
  );
}
