import logo from './logo.svg';
import './App.css';
import React from 'react'
import DragonIcon from './imgs/icon.png';


function App() {
  return (
    <div className="App">

      <div id="body_background">

        <div id="title">
          <h1 id="title_main">Red Dragon</h1>
        </div>

        <div id="img_dragon">
          <img src={DragonIcon}/>
        </div>

        <div id="buttons">
          <a className="btn btn-danger" target='_blank' href='https://github.com/charlesdev771/Red-Dragon'>Download</a>

          <a className="btn btn-dark"  target="_blank" href='https://github.com/charlesdev771/Red-Dragon/tree/main'>Documentation</a>
        </div>

        <div id="footer">
          <h3>Created by: Charles Dantas (ccod)</h3>
        </div>

      </div>

    </div>
  );
}

export default App;
