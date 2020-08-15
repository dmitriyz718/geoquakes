import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    Earthquakes: [],
  };

  componentDidMount() {
    const getQuakes = async () => {
      let response = await (await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)).json();;
      this.setState({ Earthquakes: response.features });
    }
    getQuakes();
  };

  render() {
    return (
      <div className="app" >
        <div className="mapContainer">
          ...put Map Component here...
      </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
        ...put Quakes Component here...
      </div>
      </div>
    );
  }
}

export default App;
