import "./SearchBox.css";
import arrow from "./icon-arrow.svg";

const SearchBox = ({ ip, setIP, handleSubmit }) => {
	return (
		<div id="SearchBox" onSubmit={handleSubmit}>
			<h3>IP Address Tracker</h3>
			<form>
				<input
					value={ip}
					onChange={(e) => setIP(e.target.value)}
					type="text"
					placeholder="Search for any IP address or domain"
				/>
				<button type="submit">
					<img src={arrow} alt="" />
				</button>
			</form>
		</div>
	);
};

export default SearchBox;
