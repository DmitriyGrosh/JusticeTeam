import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import Total from "./Total";

import './cart.scss'

const Cart = ({ logout, ...rest }) => {
	const lamps = JSON.parse(localStorage.getItem('lamps'));
	const [data, setData] = useState(JSON.parse(localStorage.getItem('productsInCart')));
	const [number, setNumber] = useState(JSON.parse(localStorage.getItem('numberInCart')));
	let sum = 0;

	useEffect(() => {
		document.querySelector('.number-cart').innerHTML = `(${number})`;
		localStorage.setItem('numberInCart', JSON.stringify(number));
		localStorage.setItem('productsInCart', JSON.stringify(data));
	},[number]);

	const newList = data.map( (e) => {
		const img = lamps[e.id - 1].img;
		sum += e.counter * e.price;

		const handleDeleteLamp = () => {
			let value = number;

			data.map((el, i) => {
				if (el.id === e.id) {
					data.splice(i, 1);
					value -= el.counter;
					setNumber(value);
				}
			})
		};

		return (
			<div key={e.id} className='cart-list'>
				<div className='cart-item'>
					<div className='cart-img'>
						<img src={img} alt='lamp' />
					</div>
					<div className='cart-info'>
						<div className='cart-info-container'>
							<h3>{e.info}</h3>
							<p className='price'>{e.counter}x {e.currency + e.price.toFixed(2)}</p>
							<p>Some more information goes here....</p>
							<div className='cart-button'>
								<IconButton onClick={handleDeleteLamp} variant='outlined'>
									<ClearIcon />
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	});
	 return (
	 	<div className='cart-container'>
			{newList}
			<Total logout={logout} data={sum} />
		</div>
	 );
 }

 export default withRouter(Cart);