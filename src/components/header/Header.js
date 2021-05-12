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
			src: '/home'
		},
		{
			info: 'Sign up',
			img: '',
			id: ids.generate(),
			src: '/signup'
		},
		{
			info: 'Sign in',
			img: '',
			id: ids.generate(),
			src: '/signin'
		},
		{
			info: `Cart`,
			img: cart,
			id: ids.generate(),
			src: '/cart',
			status: true,
			number: localStorage.numberInCart
		},
		{
			info: '',
			img: '',
			id: ids.generate(),
			statusId: false,
			src: '/error'
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
					<img src={list} />
				</div>
				<Menu menu={menu} />
			</div>
		</header>
	);
}

export default Header;