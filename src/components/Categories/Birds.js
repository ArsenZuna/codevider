import React, { useState, useEffect } from 'react';
import {fetchBirds} from "../../utils/plugins/api";
import AnimalsList from "./AnimalsList";
import SearchBar from "./SearchBar";

const Birds = () => {
	const [birds, setBirds] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const birdsData = await fetchBirds();
			setBirds(birdsData);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <div className="loader">
			<div className="dot-one"></div>
			<div className="dot-two">- -</div>
			<div className="dot-three"></div>
		</div>;
	}

	return (
		<div>
			<h2 className="pt-5 text-white">Birds</h2>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<AnimalsList animals={birds} category="bird" searchQuery={searchQuery}/>
		</div>
	);
};

export default Birds;