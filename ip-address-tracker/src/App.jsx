import React from "react";
import SearchBox from "./components/searchBox/SearchBox.jsx";
import DataInfo from "./components/dataInfo/DataInfo.jsx";
import MapBox from "./components/mapBox/MapBox.jsx";

function App() {
  const [ip, setIP] = React.useState("");
  const [ipData, setIPData] = React.useState({});

  async function handleRequest() {
    try {
      const url = await fetch(
        " https://geo.ipify.org/api/v2/country,city?apiKey=" +
          process.env.REACT_APP_API_KEY +
          "&domain=" +
          ip
      );
      const data = await url.json();
      setIPData(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  return (
    <div className="App">
      <SearchBox ip={ip} setIP={setIP} handleSubmit={handleSubmit} />
      <DataInfo ipData={ipData} />
      <MapBox ipData={ipData} />
    </div>
  );
}

export default App;
