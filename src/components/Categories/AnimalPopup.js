import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnimalPopup = ({ show, onHide, animal }) => {
	if (!animal) return null;

	const renderAnimalDetails = () => {
		switch (animal.category) {
			case 'dog':
				return (
					<>
						<p><strong>ID:</strong> {animal.id}</p>
						<p><strong>Name:</strong> {animal.name}</p>
						<p><strong>Weight:</strong> {animal.breed_group}</p>
						<p><strong>Size:</strong> {animal.size}</p>
						<p><strong>Lifespan:</strong> {animal.lifespan}</p>
						<p><strong>Origin:</strong> {animal.origin}</p>
						<p><strong>Temperament:</strong> {animal.temperament}</p>
						<p><strong>Colors:</strong> {animal.colors}</p>
						<p><strong>Description:</strong> {animal.description}</p>
					</>
				);
			case 'cat':
				return (
					<>
						<p><strong>ID:</strong> {animal.id}</p>
						<p><strong>Name:</strong> {animal.name}</p>
						<p><strong>Origin:</strong> {animal.origin}</p>
						<p><strong>Temperament:</strong> {animal.temperament}</p>
						<p><strong>Colors:</strong> {animal.colors}</p>
						<p><strong>Description:</strong> {animal.description}</p>
					</>
				);
			case 'bird':
				return (
					<>
						<p><strong>ID:</strong> {animal.id}</p>
						<p><strong>Name:</strong> {animal.name}</p>
						<p><strong>Species:</strong> {animal.species}</p>
						<p><strong>Family:</strong> {animal.family}</p>
						<p><strong>Habitat:</strong> {animal.habitat}</p>
						<p><strong>Place of Found:</strong> {animal.place_of_found}</p>
						<p><strong>Diet:</strong> {animal.diet}</p>
						<p><strong>Weight:</strong> {animal.weight}</p>
						<p><strong>Height:</strong> {animal.size}</p>
						<p><strong>Description:</strong> {animal.description}</p>
					</>
				);
			default:
				return <p>No details available</p>;
		}
	};

	return (
		<Modal show={show} onHide={onHide} size="lg" backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>{animal.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={animal.image} alt={animal.name} className="img-fluid mb-3" />
				{renderAnimalDetails()}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AnimalPopup;
