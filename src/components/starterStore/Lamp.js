import React from 'react';
import { NavLink } from 'react-router-dom';

const Lamp = (props) => {

	const { lampInfo } = props;

	const goodsContent = lampInfo.map( (element) => {

		return(
			<NavLink
				to={`/home/lamp${ element.id }`}
				key={ element.id }
				className='lamp'
			>
				<div  className='lamp-img'>
					<img src={element.img} />
				</div>
				<div className='lamp-information'>
					<h2>{ element.info }</h2>
					<p>{ element.currency + element.price.toFixed(2) }</p>
				</div>
			</NavLink>
		);
	});

	return goodsContent;
};

export default Lamp;