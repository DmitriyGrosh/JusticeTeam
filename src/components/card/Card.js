import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Form from './Form';

import './Card.scss';

const Card = (props) => {

	const { auth } = props;

	const lamps = JSON.parse(localStorage.getItem('lamps'));
	const count = localStorage.getItem('numberInCart');
	const  { id } = useParams();
	const currentLamp = lamps[id - 1];

	useEffect(() => {
		if (auth) {
			document.querySelector('.number-cart').innerHTML = `(${count})`;
		} else {
			document.querySelector('.number-cart').innerHTML ='(0)'
		}
	}, []);

	return (
		<div className='card'>
			<div className='card-container'>
				<div className='buy-card'>
					<div className='card-img'>
						<img
							className='card-lamp'
							src={currentLamp.img}
							alt='lamp'
						/>
					</div>
					<div className='card-input'>
						<h2 className='inp'>{currentLamp.info}</h2>
						<p className='inp'>{currentLamp.currency + currentLamp.price.toFixed(2)}</p>
						<p className='inp tag'>{currentLamp.tag}</p>
						<Form lamp={currentLamp} auth={auth} />
					</div>
				</div>
				<div className='card-info'>
					<h3>About this product</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus PageMaker including versions of
						Lorem Ipsum.</p>
				</div>
			</div>
		</div>
	);
};

export default Card;