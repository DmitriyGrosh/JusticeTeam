import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {Button, ThemeProvider, createMuiTheme} from "@material-ui/core";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

const Form = (props) => {

  const { lamp } = props;
  const { register, handleSubmit, formState: {errors}} = useForm();
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('numberInCart')));

  useEffect(() => {
		document.querySelector('.number-cart').innerHTML = `(${number})`;
	}, [number])

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ff9100',
        main: '#ff9100',
        dark: '#ff9100',
        contrastText: '#ff9100',
      }
  }})

  const handleSubmitInLocalStorage = () => {
		const lampsCart = JSON.parse(localStorage.getItem('productsInCart'))
  	const	value = Number(document.getElementById('number').value);
		const product = {
			id: lamp.id,
			price: lamp.price,
			currency: lamp.currency,
			info: lamp.info,
			counter: value
		}
		let counter = number;
		let	checkRepeat = false;
		let indexOfElement;

		counter += value;

		lampsCart.forEach((el, i) => {
			if (el.id === product.id) {
				checkRepeat = true;
				indexOfElement = i;
			}
		})

		if (!checkRepeat) {
			lampsCart.push(product);
		} else {
			lampsCart[indexOfElement].counter += value;
		}

		setNumber(counter)

		localStorage.setItem('numberInCart', JSON.stringify(counter));
		localStorage.setItem('productsInCart', JSON.stringify(lampsCart));
  }

  return (
   <ThemeProvider theme={theme}>
		 <div className='form-container'>
			 <form onSubmit={handleSubmit(handleSubmitInLocalStorage)}>
				 <input
					 id='number'
					 type='number'
					 {...register(
						 'number',
						 {required: 'Enter number of lamp',
							 min: {value: 1, message: `Error: There is not enough stock to add ${lamp.info} to your cart`},
							 max: {value: 3, message: `Error: There is to stock to add ${lamp.info} to your cart`}}
					 )}
					 className={errors.number && 'error'}
				 />
				 <Button
					 type='submit'
					 variant='contained'
					 color='default'
					 startIcon={<AddShoppingCartOutlinedIcon />}
				 >
					 Add to Cart
				 </Button>
			 </form>
			 <div className='message'>
				 {errors.number && <p>{errors.number.message}</p>}
			 </div>
		 </div>
   </ThemeProvider>
 )
 }

 export default Form;