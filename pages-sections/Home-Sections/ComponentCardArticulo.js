import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import classNames from "classnames";


const useStyles = makeStyles(styles);

export default function ComponentCardArticulo(props) {
  const { articulo } = props;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardArticulo}>
        <Box className={classes.cardHeaderImage}>
          <img
            src={articulo.image}
          />
        </Box>
        <CardContent>
          <h6 className={classes.titleArticulo}>{articulo.title}</h6>
          <p className={classes.contentArticulo}>{articulo.content}</p>
        </CardContent>
      </Card>
    </>
  );
}
