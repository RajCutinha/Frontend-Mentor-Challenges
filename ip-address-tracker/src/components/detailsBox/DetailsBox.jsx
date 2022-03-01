import "./DetailsBox.css";

const detailsBox = ({ ipData }) => {
  return (
    <div id="Details">
      <div>
        <span className="type">IP Address</span>
        {ipData?.ip && <h4>{ipData.ip}</h4>}
      </div>
      <div>
        <span className="type">Location</span>
        {ipData?.location && (
          <h4>
            {ipData?.location?.city}, {ipData?.location?.country},{" "}
            {ipData?.location?.postalCode}
          </h4>
        )}
      </div>
      <div>
        <span className="type">Timezone</span>
        {ipData?.location && <h4>{ipData?.location?.timezone}</h4>}
      </div>
      <div>
        <span className="type">ISP</span>
        {ipData?.isp && <h4>{ipData?.isp}</h4>}
      </div>
    </div>
  );
};

export default detailsBox;
