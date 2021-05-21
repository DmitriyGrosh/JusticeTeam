import React, { useEffect } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import jwt_decode from "jwt-decode";

import Header from '../header/Header';
import StarterStore from '../starterStore/StarterStore';
import Card from'../card/Card';
import Cart from '../cart/Cart';
import Reg from '../AuthReg/reg/Reg';
import Auth from '../AuthReg/auth/Auth';
import {getLamps, getOrders} from "../../services/service";

import './main.scss';



const Main = () => {

	useEffect(() => {
		if (localStorage.token === undefined) {
			localStorage.setItem('token', JSON.stringify(false))
		}

		if (localStorage.numberInCart === undefined) {
			localStorage.setItem('numberInCart', JSON.stringify(0))
		}

		if (localStorage.listOfUsers === undefined) {
			localStorage.setItem('listOfUsers', JSON.stringify([]))
		}
		console.log(localStorage.getItem('token').length)

		if (localStorage.getItem('token').length === 5) {
			localStorage.setItem('productsInCart', JSON.stringify([]))
		} else {
			getOrders()
				.then((response) => {
					const filtCart = response.data
						.filter(el => el.user === jwt_decode(localStorage.getItem('token')).email)
				localStorage.setItem('productsInCart', JSON.stringify(filtCart))
			})
		}

		getLamps()
			.then((response) => {
			localStorage.setItem('lamps', JSON.stringify(response.data));
			console.log(response.data)
		})
			.catch((error) => {
				console.log(error.response)
			})

	}, []);

	const goods = JSON.parse(localStorage.getItem('lamps'));

	return (
		<div className='wrapper'>
			<Router>
				<Header />
				<Switch>
					<Route path='/auth/'>
						<Auth path='/auth/' />
					</Route>
					<Route path='/reg/'>
						<Reg />
					</Route>
					<Route path='/lamp:id/' >
						<Card />
					</Route>
					<Route exact path='/home'>
						<StarterStore goods={goods} />
					</Route>
					<Route path='/cart' component={Cart} />
					<Redirect from='/' to='/home' />
				</Switch>
			</Router>
		</div>
	);
};

export default Main;
