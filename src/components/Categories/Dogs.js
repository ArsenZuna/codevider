import React, {useState, useEffect} from 'react';
import {fetchDogs} from "../../utils/plugins/api";
import AnimalsList from "./AnimalsList";
import SearchBar from "./SearchBar";

const Dogs = () => {
	const [dogs, setDogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const dogsData = await fetchDogs();
			setDogs(dogsData);
			setLoading(false);
		};
		fetchData()
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
			<h2 className="pt-5 text-white">Dogs</h2>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<AnimalsList animals={dogs} category="dog" searchQuery={searchQuery}/>
		</div>
	);
};

export default Dogs;