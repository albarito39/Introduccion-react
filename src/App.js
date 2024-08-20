import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hola mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <table>
        <td>
          <tr>Nombre:</tr>
          <tr>apellido:</tr>
          <tr>correo:</tr>
          <tr>celular:</tr>
        </td>
        <td>
          <tr>juan fernando</tr>
          <tr>cuadrado carvajal</tr>
          <tr>cuadradojuanfer@gmail.com</tr>
          <tr>3023255342</tr>
        </td>
      </table>
<table className="table-primary">nombre:</table>
<table className="table-secondary">apellido:</table>
<table className="table-success">correo:</table>
<table className="table-danger">celular:</table>
<table className="table-warning">...</table>
<table className="table-info">...</table>
<table className="table-light">...</table>
<table className="table-dark">...</table>
<tr className="table-primary"></tr>
<tr className="table-secondary">...</tr>
<tr className="table-success">...</tr>
<tr className="table-danger">...</tr>
<tr className="table-warning">...</tr>
<tr className="table-info">...</tr>
<tr className="table-light">...</tr>
<tr className="table-dark">...</tr>
<tr>
  <td className="table-primary"></td>
  <td className="table-secondary">...</td>
  <td className="table-success">...</td>
  <td className="table-danger">...</td>
  <td className="table-warning">...</td>
  <td className="table-info">...</td>
  <td className="table-light">...</td>
  <td className="table-dark">...</td>
</tr>
    </div>
  );
}

export default App;
