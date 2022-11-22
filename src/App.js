import React from "react";
import "./App.css";
import { usePosition } from "use-position";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  console.log(latitude);
  console.log(longitude);

  const getWeatherData = async (lat, lon) => {};

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="App">
      <p>Look</p>
    </div>
  );
}

export default App;
