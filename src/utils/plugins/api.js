import axios from 'axios';

export const API = 'https://freetestapi.com/api/v1';

export const fetchDogs = async () => {
	try {
		const response = await axios.get(`${API}/dogs`);
		return response.data;
	} catch (error) {
		console.error('Error fetching dogs:', error);
		return [];
	}
};

export const fetchCats = async () => {
	const response = await axios.get(`${API}/cats`);
	return response.data;
};

export const fetchBirds = async () => {
	const response = await axios.get(`${API}/birds`);
	return response.data;
};

export const fetchFeaturedAnimal = async (category) => {
	const response = await axios.get(`${API}/${category}`);
	return response.data[0];
};
