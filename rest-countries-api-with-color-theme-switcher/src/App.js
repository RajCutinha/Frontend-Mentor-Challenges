import React from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import CardSection from "./Components/CardSection/CardSection";
import CardDetails from "./Components/CardDetails/CardDetails";
import Card from "./Components/Card/Card";

function App() {
  const [countrys, setCountrys] = React.useState([]);
  const [select, setSelect] = React.useState("");
  const [countryInput, setCountryInput] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);
  const [cardActive, setCardActive] = React.useState({
    activeCountry: {},
    active: false,
  });

  const filteredCountrys = countrys.filter((country) => {
    if (select === "" || country.region === select) {
      if (
        countryInput === "" ||
        country.name.toLowerCase().includes(countryInput.toLowerCase())
      ) {
        return country;
      }
    }
  });

  function getCountry() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data))
      .catch((err) => console.log(err));
  }

  function changeMode() {
    if (!darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("darkMode", darkMode);
      setDarkMode(true);
    } else {
      document.documentElement.setAttribute("data-theme", "");
      localStorage.removeItem("darkMode");
      setDarkMode(false);
    }
  }

  function showCountryDetails(e) {
    const countryName = e.target.children[1].children[0].innerText;
    const country = countrys.find((item) => item.name === countryName);
    setCardActive({
      ...cardActive,
      activeCountry: { ...country },
      active: true,
    });
  }

  React.useEffect(() => {
    getCountry();
    if (localStorage.getItem("darkMode") === null) {
      return;
    } else {
      changeMode();
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="App">
      <Header changeMode={changeMode} darkMode={darkMode} />
      {cardActive.active ? (
        false
      ) : (
        <Filter
          select={select}
          setSelect={setSelect}
          countryInput={countryInput}
          setCountryInput={setCountryInput}
        />
      )}
      {countrys.length === 0 ? (
        <Loader />
      ) : cardActive.active ? (
        <CardDetails cardActive={cardActive} setCardActive={setCardActive} />
      ) : (
        <CardSection>
          {filteredCountrys.map((country, index) => (
            <Card
              Country={country}
              key={index}
              getCountry={showCountryDetails}
            />
          ))}
        </CardSection>
      )}
    </div>
  );
}

export default App;
