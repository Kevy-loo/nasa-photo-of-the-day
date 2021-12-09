import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Picture from "./Picture";

function App() {
  const [nasaData, setNasaData] = useState({});
  console.log(nasaData);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((resp) => {
      console.log(resp.data);

      setNasaData(resp.data);
      // console.log(nasaData);
    })
    .catch((err) => {
      console.log('er');
    })
  }, []);

  // console.log(nasaData)
  return (
    <div className="App">
      <div>
        <Picture nasaImg={nasaData}/>
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
