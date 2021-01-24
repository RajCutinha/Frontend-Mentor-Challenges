import DetailsBox from "../detailsBox/DetailsBox.jsx";
import "./DataInfo.css";

const DataInfo = ({ ipData }) => {
	return (
		<div className="info">
			<DetailsBox ipData={ipData} />
		</div>
	);
};

export default DataInfo;
