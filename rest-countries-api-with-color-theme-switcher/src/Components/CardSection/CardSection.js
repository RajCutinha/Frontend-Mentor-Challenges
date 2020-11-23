import "./CardSection.css";

const CardSection = ({ children }) => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards-grid">{children}</div>
      </div>
    </section>
  );
};

export default CardSection;
