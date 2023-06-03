import React, { useEffect, useState } from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Box, Card, CardContent, Container, Grid, MenuItem, MenuList, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import ComponentCardArticulo from "./ComponentCardArticulo";
import { fetchArticulos } from "../../actions/articulos";

const useStyles = makeStyles(styles);

export default function SectionArticulos() {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [articulos, setArticulos] = useState([]);
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    console.log(categoria)
    fetchArticulos(categoria, (data) => {
      setArticulos(data);
    });
  }, [categoria]);

  return (
    <Box className={classes.sections}>
      <Container className={classes.container}>
        <Box className={classNames(classes.title, classes.titleBackground)}>
          <h2>Nuestros Articulos </h2>
        </Box>
        <Box my={1}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <MenuList className={classNames.menuListSm}>
                    <MenuItem onClick={() => setCategoria(null)}>
                      <Typography variant="inherit" className={classes.menuItemText}>Todos</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Productos')}>
                      <Typography variant="inherit" className={classes.menuItemText}>Productos</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Recetas')}>
                      <Typography variant="inherit" className={classes.menuItemText}>Recetas</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Consejos')}>
                      <Typography variant="inherit" className={classes.menuItemText}>Consejos</Typography>
                    </MenuItem>
                  </MenuList>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                {articulos && typeof articulos == 'object' && articulos.map(articulo => (
                  <Grid item xs={6} md={4}>
                    <ComponentCardArticulo articulo={articulo} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
