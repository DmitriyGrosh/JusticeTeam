import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Button, ThemeProvider, createMuiTheme } from '@material-ui/core';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import jwt_decode from 'jwt-decode';

import {updateLamps, getLamps, createOrder, getOrders, updateOrder} from "../../services/service";


const Form = (props) => {

  const {lamp} = props;

  const {register, handleSubmit, formState: {errors}} = useForm();
  const [message, setMessage] = useState({
    status: false,
    content: ''
  })
  const [positiveMessage, setPositiveMessage] = useState({
    status: false,
    content: ''
  })
  const [cart, setCart] = useState([])
  const [resp, setResp] = useState([])
  const [flag, setFlag] = useState(false)

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ff9100',
        main: '#ff9100',
        dark: '#ff9100',
        contrastText: '#ff9100',
      }
    }
  });

    const getOrderFunc = async () => {
      await getOrders()
        .then(({data}) => {
          setCart(data)
      })
        .catch((e) => {
          setMessage( {
            status: true,
            content: 'для покупки нужно авторизоваться'
          })
        })
    }

    const getLampsFunc = async () => {
      await getLamps()
        .then((response) => {
          setResp(response.data)
        })
    }

    useEffect(() => {
      getOrderFunc()
      getLampsFunc()
    }, [flag])

  const apiFunc = async (value) => {
    let filtId = resp.filter(el => el.id === lamp.id)
    if ((filtId[0]?.count - value) >= 0) {
      await updateLamps({
        id: lamp?.id,
        count: filtId[0]?.count - value
      })
    } else {
      setMessage( {
        status: true,
        content: 'нет товара на складе'
      })
    }

    const filtCart = cart
      .filter(el => el.id === lamp.id)
      .filter(el => el.user === jwt_decode(localStorage.getItem('token')).email)

    if (filtCart.length !== 0) {
      await updateOrder({
        id: filtCart[0].id,
        counter: filtCart[0].counter + value,
        user: jwt_decode(localStorage.getItem('token')).email,
      }).then(() => {
        getOrderFunc()
          .then((res) => {
            setPositiveMessage({
              status: true,
              content: 'товар добавлен в корзину'
            })
          })
      })

    } else {
      const order = {
        id: filtId[0].id,
        counter: value,
        price: filtId[0].price,
        info: filtId[0].info,
        user: jwt_decode(localStorage.getItem('token')).email,
        tag: filtId[0].tag,
        currency: filtId[0].currency
      }
      await createOrder(order)
        .then((res) => {
        setPositiveMessage({
          status: true,
          content: 'товар добавлен в корзину'
        })
      })
    }
  }

  const handleSubmitInLocalStorage = async () => {
    const	value = Number(document.getElementById('number').value);
    setFlag(!flag)
    apiFunc(value)
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='form-container'>
        <form onSubmit={handleSubmit(handleSubmitInLocalStorage)}>
          <input
            id='number'
            type='number'
            {...register(
              'number',
              {
                required: 'Enter number of lamp',
                min: {
                  value: 1,
                  message: `Error: There is not enough stock to add ${lamp.info} to your cart`
                },
                max: {value: 3, message: `Error: There is to stock to add ${lamp.info} to your cart`}
              }
            )}
            className={errors.number && 'error'}
          />
          <Button
            type='submit'
            variant='contained'
            color='default'
            startIcon={<AddShoppingCartOutlinedIcon/>}
          >
            Add to Cart
          </Button>
        </form>
        <div className='message'>
          {errors.number && <p>{errors.number.message}</p>}
          {message.status && <p>{message.content}</p>}
        </div>
        <div className='positive-message'>
          {positiveMessage.status && <p>{positiveMessage.content}</p>}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Form;
