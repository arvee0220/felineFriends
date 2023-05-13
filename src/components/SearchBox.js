import React from "react";

const SearchBox = ({ searchRender }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--light-blue bg-washed-blue"
				type="search"
				placeholder="search felines"
				onChange={searchRender}
			/>
		</div>
	)
};

export default SearchBox;