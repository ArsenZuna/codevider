import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery}) => {
	const handleInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<input type="text"
						 placeholder="Search..."
						 value={searchQuery}
						 onChange={handleInputChange}
						 className="input-style"
						 required=""/>
		</div>
	);
};

export default SearchBar;