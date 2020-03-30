import React from 'react';
import './App.css';
import Square from './components/Square';
import InfoPercolation from './components/InfoPercolation';
import {connected, randomInt, openSite} from './percolation';

function getLista() {
  // Key array for percolation:
  let lista = [];
  for (let i = 0; i < 402; i++) {
    lista.push(i);
  }
  return lista;
}

function getArbol() {
  // Kep track of size of tree
  let tree = [];
  for (let n = 0; n < 402; n++) {
    tree.push(1);
  }
  return tree;
}

function getOpenSites() {
  // Keep track of open sites:
  let openSites = [];
  for (let n = 0; n < 400; n++) {
    openSites.push(false);
  }
  return openSites;
}

function getFullSites() {
  // Keep track of full sites:
  let fullSites = [];
  for (let m = 0; m < 400; m++) {
    fullSites.push(false);
  }
  return fullSites;
}

function startAnimation() {
  var startID = setInterval(animar, 24);
  const msgCounter = document.getElementById("conteo");
  msgCounter.innerHTML = "Opening sites...";

  let tree = getArbol();
  let lista = getLista();
  let openSites = getOpenSites();
  let fullSites = getFullSites();
  let p = 0;
  function animar() {
    p = randomInt(400);
    openSite(p, lista, tree, openSites);

    for (let h = 0; h < 400; h++) {
      if (connected(h, 400, lista) && !fullSites[h]) {
        fullSites[h] = true;
        if (h > 379) {
          let conteo = 0;
          openSites.forEach(function(elem) {if (elem) conteo++});
          msgCounter.innerHTML = "Percolates with " + Math.round(conteo/400*1000)/10.0 + "% open sites (400 sites total)";
          clearInterval(startID);
        }
      }
    }

    const elems = document.getElementsByClassName("Square");
    for (let jj = 0; jj < 400; jj++) {
      elems.item(jj).style.backgroundColor = fullSites[jj] ?  "lightblue" : openSites[jj] ? "white" : "grey";
    }
    //if (p > 379 && p < 400 && fullSites[p]) {
    //if (p > 379 && fullSites[p] === true) {
    //if (p > 379 && connected(p, 400, lista)) {
    //  console.log("percolates!", conteo, p);
    //  clearInterval(startID);
    //}

  }
}

function App() {

  let info = [];
  for (let k = 0; k < 400; k++) {
    info.push(k);
  }

  return (
    <div className="App">
      <header>
        <h1>Percolation</h1>
      </header>
      <button onClick={() => startAnimation()} className="button">Start Percolation</button>
      <div className="cuadrado">
        {info.map((valor, index) => 
          <Square valor={valor} key={index} />
        )}
      </div>
      <p className="lead" id="conteo" style={{color: "blue"}}></p>
      <InfoPercolation />
    </div>
  );
}

export default App;
