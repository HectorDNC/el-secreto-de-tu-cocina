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
    fetchArticulos(categoria, (data) => {
      setArticulos(data);
    });
  }, [categoria]);

  return (
    <Box className={classes.sections}>
      <Container className={classes.container}>
        <Box className={classNames(classes.title, classes.titleBackground)}>
          <h2><b>Nuestros Artículos</b></h2>
        </Box>
        <Box my={2} mt={5}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <MenuList className={classNames.menuListSm}>
                    <MenuItem onClick={() => setCategoria(null)}>
                      <Typography variant="inherit" className={categoria === null ? classes.menuItemTextSelected : classes.menuItemText}>
                        Todos
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Productos')}>
                      <Typography variant="inherit" className={categoria == "Productos" ? classes.menuItemTextSelected : classes.menuItemText}>
                        Productos
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Recetas')}>
                      <Typography variant="inherit" className={categoria == "Recetas" ? classes.menuItemTextSelected : classes.menuItemText}>
                        Recetas
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={() => setCategoria('Consejos')}>
                      <Typography variant="inherit" className={categoria == "Consejos" ? classes.menuItemTextSelected : classes.menuItemText}>
                        Consejos
                      </Typography>
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
