import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import jwt_decode from 'jwt-decode';

import {deleteOrder, getOrders} from "../../services/service";

import Total from "./Total";

import './cart.scss'

const Cart = () => {
	const lamps = JSON.parse(localStorage.getItem('lamps'));
	const [data, setData] = useState(JSON.parse(localStorage.getItem('productsInCart')));
	const [number, setNumber] = useState(JSON.parse(localStorage.getItem('numberInCart')));
	const [flag, setFlag] = useState(false)
	let sum = 0;

	const getOrderFunc = async () => {
		await getOrders()
			.then((response) => {
			console.log(response)
				const filter = response.data
					.filter((el) => el.user === jwt_decode(localStorage.getItem('token')).email)
				localStorage.setItem('productsInCart', JSON.stringify(filter))
				setData(filter)
			})
	}

	useEffect(() => {
		document.querySelector('.number-cart').innerHTML = `(${number})`;
		localStorage.setItem('numberInCart', JSON.stringify(number));
		localStorage.setItem('productsInCart', JSON.stringify(data));
		setTimeout(getOrderFunc, 200)

	},[flag]);

	console.log(data)
	const newList = data.map( (e) => {
		const img = `http://localhost:5000/${lamps[e.id - 1].image}`;
		sum += e.counter * e.price;

		const deleteCurrentOrder = async (data) => {
			await deleteOrder(data).then((response) => {
				console.log(response)
			})
		}

		const handleDeleteLamp = () => {
			let value = number;
			data.map((el, i) => {
					if (el.id === e.id) {
						let deletedLamp = {
							id: e.id,
							user: jwt_decode(localStorage.getItem('token')).email
						}
						data.splice(i, 1);
						value -= el.counter;
						setNumber(value);

						deleteCurrentOrder(deletedLamp)
						setFlag(!flag)
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
			<Total data={sum} />
		</div>
	 );
 }

export default Cart;