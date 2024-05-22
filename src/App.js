import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import UserList from './Componenets/UserList';

const App = () => {

  //Gestion des données utilisateur avec useState
  const [users, setUsers] = useState([]);


  //Récupération des données d'une API lorsque le composant est monté
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  return (
    <div className="App">
       <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />



      <h1>Liste des utilisateurs</h1>
      <UserList users={users} />
      </header>
    </div>
  );
};

export default App;

