import React, {useEffect, useState} from 'react'
import { Button } from '@material-ui/core';

const Total = (props) => {

	const [flag, setFlag] = useState(false)

	useEffect(() => {
		localStorage.setItem('productsInCart', JSON.stringify([]))
	}, [flag])

	const { data } = props;

	const handleLogOut = () => {
		localStorage.setItem('numberInCart', 0)
		localStorage.setItem('token', false)
		localStorage.setItem('productsInCart', JSON.stringify([]))
		setFlag(!flag)
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