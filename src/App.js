/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState, useEffect } from 'react';
import moment from 'moment';

import logo from './logo.svg';
import './App.css';



const App = (props) => {
  const [date, setDate] = useState(new Date());
  
  //Reemplaza ciclo de viuda componentDidMount y componentWillUnmount
  useEffect(() => {

    // Seteo un timer que se ejecute cada 1 segundo
    var setTimer = setInterval( () => tick(), 1000 );
   
    return function cleanup() {
        clearInterval(setTimer);
      };
   });
   

  //Obtengo la fecha Actual
  function tick() {
    setDate(new Date());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <a
          className="App-link"
          href="https://momentjs.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de Momentjs
        </a>
        <h2>{date.toLocaleTimeString()}</h2>
        <span>sin moment:</span>
        <h6>sin moment: {date.toString()}</h6>
        <span>con moment:</span>
        <h6>con moment: {moment(date.toString()).format('DD MMM YYYY')}</h6>
      </header>
    </div>
  )
};


export default App;
