import React, {useEffect, useState} from 'react';
import "../../assets/styles.css";
import AnimalPopup from "./AnimalPopup";

const AnimalsList = ({animals, category, searchQuery}) => {
	const [selectedAnimal, setSelectedAnimal] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handleCardClick = (animal) => {
		setSelectedAnimal({ ...animal, category }); // or 'cat', 'bird' based on the animal
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedAnimal(null);
	};

	useEffect(() => {
		console.log('Animals in AnimalsList:', animals);
	}, [animals]);

	if (!Array.isArray(animals)) {
		return null;
	}

	const filteredAnimals = animals.filter((animal) =>
		animal.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
				<div className="animal-list">
					{filteredAnimals.map((animal) => (
						<div key={animal.id} className="fa-card" onClick={() => handleCardClick(animal)}>
							<img src={animal.image} alt="animal pic"/>
							<div className="fa-card-content">
								<p className="fa-card-title">{animal.name}</p>
								<p className="fa-card-description">{animal.origin}</p>
							</div>
						</div>
					))}
					{selectedAnimal && (
						<AnimalPopup
							show={showModal}
							onHide={handleCloseModal}
							animal={selectedAnimal}
						/>
					)}
				</div>
		</>
	);
}

export default AnimalsList;