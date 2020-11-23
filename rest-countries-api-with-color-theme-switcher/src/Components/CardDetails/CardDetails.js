import "./CardDetails.css";

const CardDetails = ({ cardActive, setCardActive }) => {
  const country = cardActive.activeCountry;
  return (
    <section className="card-details">
      <div className="container">
        <button
          className="btn-primary"
          onClick={() => setCardActive({ ...cardActive, active: false })}
        >
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
        <div>
          <div className="flag">
            <img src={country.flag} alt="" />
          </div>
          <div className="country-details">
            <h3>{country.name}</h3>
            <div>
              <div>
                <p>
                  <span className="bold">Native Name:</span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className="bold">Population:</span>{" "}
                  {country.population.toLocaleString("en")}
                </p>
                <p>
                  <span className="bold">Region:</span> {country.region}
                </p>
                <p>
                  <span className="bold">Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span className="bold">Capital:</span> {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span className="bold">Top Level Domain:</span>{" "}
                  {country.topLevelDomain.map((item) => item).join(", ")}
                </p>
                <p>
                  <span className="bold">Currencies:</span>{" "}
                  {country.currencies.map((item) => item.code).join(", ")}
                </p>
                <p>
                  <span className="bold">Languages:</span>{" "}
                  {country.languages.map((item) => item.name).join(", ")}
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="bold">Border Countries:</span>
              </p>
              {country.borders.map((item, index) => (
                <button className="btn-primary" key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
