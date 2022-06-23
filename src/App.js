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
          <button type="button" class="btn btn-danger">Download</button>
          <button type="button" class="btn btn-dark">Documentation</button>
        </div>

        <div id="footer">
          <h3>Created by: Charles Dantas (chameleon)</h3>
        </div>

      </div>

    </div>
  );
}

export default App;
