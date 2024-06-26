import React, { useState, useEffect } from 'react';
import { fetchCats } from "../../utils/plugins/api";
import AnimalsList from "./AnimalsList";
import SearchBar from "./SearchBar";

const Cats = () => {
	const [cats, setCats] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const catsData = await fetchCats();
			setCats(catsData);
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
			<h2 className="pt-5 text-white">Cats</h2>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<AnimalsList animals={cats} category="cat" searchQuery={searchQuery}/>
		</div>
	);
};

export default Cats;