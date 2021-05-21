import React from 'react';

import Menu from './Menu';

import './Header.scss';

import list from './../images/list.svg';
import cart from './../images/cart.svg';
import hexagon from './../images/hexagon.svg';

const Header = () => {
	const ids = require('short-id');

	const menu = [
		{
			info: 'Starter Store',
			img: hexagon,
			id: ids.generate(),
			src: '/home',
			statusImg: true
		},
		{
			info: 'Sign up',
			img: '',
			id: ids.generate(),
			src: '/reg',
			statusImg: false
		},
		{
			info: 'Sign in',
			img: '',
			id: ids.generate(),
			src: '/auth',
			statusImg: false
		},
		{
			info: `Cart`,
			img: cart,
			id: ids.generate(),
			src: '/cart',
			statusImg: true,
			status: true,
			number: localStorage.numberInCart
		},
		{
			info: '',
			img: '',
			id: ids.generate(),
			statusId: false,
			src: '/error',
			statusImg: false
		}
	];

	const handleChangeBurgerMenu = () => {
		let header = document.querySelector('.header');
		header.classList.toggle('active');
	};

	return (
		<header className='header'>
			<div className='container-header'>
				<div onClick={handleChangeBurgerMenu} className='menu-burger'>
					<img src={list} alt='list' />
				</div>
				<Menu menu={menu} />
			</div>
		</header>
	);
};

export default Header;