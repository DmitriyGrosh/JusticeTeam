import React from 'react'
import { Button } from '@material-ui/core';

const Total = (props) => {

	const { data, logout } = props;

	const handleLogOut = () => {
		localStorage.setItem('token', null)
	}

	return (
		<div className='cart-total-container'>
			<div className='cart-total'>
				<p><strong>Sub total: </strong>${data.toFixed(2)}</p>
				<Button onClick={handleLogOut} variant='outlined'>
					Check out
				</Button>
			</div>
		</div>
	)
};

export default Total;