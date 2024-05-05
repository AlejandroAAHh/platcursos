"use client"
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InicioSesion from './InicioSesion';
import PaginaPrincipal from './PaginaPrincipal';
import RegistrarUsuario from './RegistrarUsuario';

const MisRutas = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={<InicioSesion/>} />
        <Route path="/paginaprincipal" component={PaginaPrincipal} />
        <Route path="/registrar" component={RegistrarUsuario} />
      </Switch>
    </Router>
  );
};

export default MisRutas;