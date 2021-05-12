import { Button } from "@material-ui/core";

const Total = (props) => {

	const { data } = props;

	return (
		<div className='cart-total-container'>
			<div className='cart-total'>
				<p><strong>Sub total: </strong>${data.toFixed(2)}</p>
				<Button variant='outlined'>
					Check out
				</Button>
			</div>
		</div>
	)
}

export default Total;