import React, { Component } from 'react';
import './App.css';
import QuakesList from './components/Quakeslist';
import MapContainer from './components/MapContainer';
import Axios from 'axios';
class App extends Component {
  state = {
    earthquakes: [],
  };

  componentDidMount() {
    const getQuakes = async () => {
      Axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
        .then(res => this.setState({ earthquakes: res.data.features }))
      /*       let response = await (await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)).json();
            this.setState({ earthquakes: response.features }); */
    }
    getQuakes();
  };


  render() {
    return (
      <div className="app" >
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          <QuakesList earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
