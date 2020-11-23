import "./Filter.css";

const Filter = ({ setSelect, countryInput, setCountryInput }) => {
  return (
    <div className="filter">
      <div className="container">
        <form>
          <div className="searchbox">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => setCountryInput(e.target.value)}
              value={countryInput}
            />
          </div>
          <div className="dropdown">
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
