import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="container">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
