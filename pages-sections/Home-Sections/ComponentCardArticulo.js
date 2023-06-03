import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, MenuItem, MenuList, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";


const useStyles = makeStyles(styles);

export default function ComponentCardArticulo(props) {
  const { articulo } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card className={classes.cardArticulo}>
        <Box className={classes.cardHeaderImage}>
          <img
            src={articulo.image}
          />
        </Box>
        <CardContent>
          <Typography variant="subtitle1"><b>{articulo.title}</b></Typography>
          <Typography variant="subtitle2">{articulo.content}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
