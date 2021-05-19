import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../header/Header';
import StarterStore from '../starterStore/StarterStore';
import Card from'../card/Card';
import Cart from '../cart/Cart';
import Reg from '../AuthReg/reg/Reg';
import Auth from '../AuthReg/auth/Auth';
// import ProtectedRouter from './ProtectedRouter';

import './main.scss';
import lamp2 from '../images/lamp2.png';
import lamp1 from '../images/lamp1.png';

const Main = () => {

	const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));

	const login = () => {
		setAuth(true);
	};

	const logout = () => {
		setAuth(false);
	}

	const goods = [
		{
			img: lamp2,
			checkImg: '../images/lamp2.png',
			info: 'Gold',
			price: 243,
			currency: '$',
			id: 1,
			src: 'lamp',
			tag: 'SKU: GLD1000GLD'
		},
		{
			img: lamp1,
			checkImg: '../images/lamp1.png',
			info: 'Blue Desk',
			price: 250,
			currency: '$',
			id: 2,
			src: 'lamp',
			tag: 'SKU BLDE1000BLU'
		},
		{
			img: lamp2,
			checkImg: '../images/lamp2.png',
			info: 'Gold',
			price: 243,
			currency: '$',
			id: 3,
			src: 'lamp',
			tag: 'SKU: GLD1000GLD'
		},
		{
			img: lamp1,
			checkImg: '../images/lamp1.png',
			info: 'Blue Desk',
			price: 250,
			currency: '$',
			id: 4,
			src: 'lamp',
			tag: 'SKU: BLDE1000BLU'
		}
	];

	useEffect(() => {
		localStorage.setItem('lamps', JSON.stringify(goods));
		if (localStorage.numberInCart === undefined) {
			localStorage.setItem('numberInCart', JSON.stringify(0))
		}

		if (localStorage.productsInCart === undefined) {
			localStorage.setItem('productsInCart', JSON.stringify([]))
		}

		if (localStorage.listOfUsers === undefined) {
			localStorage.setItem('listOfUsers', JSON.stringify([]))
		}

		if (localStorage.auth === undefined) {
			localStorage.setItem('auth', JSON.stringify(false));
		}

	}, []);

	useEffect(() => {
		if (!auth) {
			document.querySelector('.number-cart').innerHTML = '(0)'
		}
	}, [auth])

	return (
		<div className='wrapper'>
			<Router>
				<Header />
				<Switch>
					<Route path='/auth/'>
						<Auth path='/auth/' login={login} />
					</Route>
					<Route path='/reg/'>
						<Reg login={login} />
					</Route>
					<Route path='/lamp:id/' >
						<Card auth={auth} />
					</Route>
					<Route exact path='/'>
						<StarterStore goods={goods} />
					</Route>
					<Route path='/cart' component={Cart} />
					{/*<ProtectedRouter*/}
					{/*	auth={auth}*/}
					{/*	path='/cart'*/}
					{/*	logout={logout}*/}
					{/*	component={Cart}*/}
					{/*/>*/}
				</Switch>
			</Router>
		</div>
	);
};

export default Main;
