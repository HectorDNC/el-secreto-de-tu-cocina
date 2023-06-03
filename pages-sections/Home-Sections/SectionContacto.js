import React, { useEffect, useState } from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Box, Card, CardContent, Container, FormControlLabel, Grid, MenuItem, MenuList, TextField, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";
import { SimpleReactValidator } from '../../config/validatorConfig.js';
import { postContacto } from "../../actions/contacto.js";

const useStyles = makeStyles(styles);

const initialVisitante = {
  firstname: '',
  lastname: '',
  email: '',
  phone: ''
}

export default function SectionContacto() {
  const classes = useStyles();
  const theme = useTheme();
  const [visitante, setVisitante] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [, forceUpdate] = useState();
  const initValidator = new SimpleReactValidator({
    autoForceUpdate: { forceUpdate },
    element: false,
    locale: 'es',
  });
  const [validator, setValidator] = useState(initValidator);

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setVisitante({
      ...visitante,
      [name]: value
    })
  }

  const handleSubmit = () => {
    if (validator.allValid()) {
      validator.hideMessages();
      setSubmitDisabled(true);
      postContacto(visitante, (res) => {
        setSubmitDisabled(false);
        if(res) setVisitante(initialVisitante);
      })
    } else {
      validator.showMessages();
      forceUpdate(true);
    }
  }

  return (
    <Box className={classes.sections}>
      <Container className={classes.container}>
        <Box className={classNames(classes.title, classes.titleBackground)}>
          <h2><b>Contáctanos</b></h2>
        </Box>
        <Box my={1} mt={5}>
          <Grid container className={classNames(classes.justifyContentCenter, classes.sectionContacto)}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1"><b>NOMBRE</b></Typography>
                  <TextField
                    id="firstname"
                    name="firstname"
                    type="text"
                    variant="outlined"
                    fullWidth
                    color="warning"
                    onChange={handleChange}
                    value={visitante.firstname}
                    helperText={validator.message('Nombre', visitante.firstname, 'required|alpha_space|min:3|max:40')}
                    error={!!validator.message('Nombre', visitante.firstname, 'required|alpha_space|min:3|max:40')}
                    InputProps={{
                      inputProps: {
                        maxLength: 40,
                      },
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1"><b>APELLIDO</b></Typography>
                  <TextField
                    id="lastname"
                    name="lastname"
                    type="text"
                    variant="outlined"
                    fullWidth
                    color="warning"
                    onChange={handleChange}
                    value={visitante.lastname}
                    helperText={validator.message('Apellido', visitante.lastname, 'required|alpha_space|min:3|max:40')}
                    error={!!validator.message('Apellido', visitante.lastname, 'required|alpha_space|min:3|max:40')}
                    InputProps={{
                      inputProps: {
                        maxLength: 40,
                      },
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1"><b>MAIL</b></Typography>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    color="warning"
                    onChange={handleChange}
                    value={visitante.email}
                    helperText={validator.message('Mail', visitante.email, 'required|email|min:3|max:100')}
                    error={!!validator.message('Mail', visitante.email, 'required|email|min:3|max:100')}
                    InputProps={{
                      inputProps: {
                        maxLength: 100,
                      },
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1"><b>TELÉFONO</b></Typography>
                  <TextField
                    id="phone"
                    name="phone"
                    type="phone"
                    variant="outlined"
                    fullWidth
                    color="warning"
                    onChange={handleChange}
                    value={visitante.phone}
                    helperText={validator.message('Teléfono', visitante.phone, 'required|phone|min:6|max:16')}
                    error={!!validator.message('Teléfono', visitante.phone, 'required|phone|min:6|max:16')}
                    InputProps={{
                      inputProps: {
                        maxLength: 16,
                      },
                    }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={12} className={classes.justifyContentEnd}>
                  <Button color={"warning"} round className={!submitDisabled ? classes.buttonSubmit : classes.buttonSubmitDisabled} onClick={handleSubmit} disabled={submitDisabled}>
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
