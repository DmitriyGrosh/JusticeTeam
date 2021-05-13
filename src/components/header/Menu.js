import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss'

const Menu = (props) => {

	const { menu } = props;

	const menuHeader = menu.map((item, i) =>

		<NavLink
			activeClassName='activeClass'
			to={item.src} key={item.id}
			className='info'
			data-mark={i}
		>
			<div className='info-img'>
				{item.statusImg
				&&
				<img src={item.img} alt='lamp' />}
			</div>
			<div className='info-text'>
				<div className='text'>
					{item.info}
				</div>
				{
					item.status &&
					<div className='text number-cart' >
						({item.number})
					</div>
				}
			</div>
		</NavLink>
	);


	return menuHeader;
};

export default Menu;
