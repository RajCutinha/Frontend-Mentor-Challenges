import "./Card.css";

const Card = ({ Country, getCountry }) => {
  return (
    <div className="card" onClick={(e) => getCountry(e)}>
      <header>
        <img src={Country.flag} alt="" />
      </header>
      <div className="card-content">
        <h3>{Country.name}</h3>
        <p>
          <span className="bold">Population:</span>{" "}
          {Country.population.toLocaleString("en")}
        </p>
        <p>
          <span className="bold">Region:</span> {Country.region}
        </p>
        <p>
          <span className="bold">Capital:</span> {Country.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
