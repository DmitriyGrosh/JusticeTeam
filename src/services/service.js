import { ajaxWrapper } from "../helpers/ajaxWrapper";
import { urls } from '../helpers/constant';

export const login = (data) => {
  const url = urls.AUTH;
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  });
};

export const registerUser = (data) => {
  const url = urls.REG;
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  })
}

export const getLamps = (data) => {
  const url = urls.LAMP;
  return ajaxWrapper({
    method: 'GET',
    url,
    data
  })
}

export const updateLamps = (data) => {
  const url = urls.LAMP;
  return ajaxWrapper({
    method: 'PATCH',
    url,
    data
  })
}

export const createOrder = (data) => {
  const url = urls.CART;
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  })
}

export const updateOrder = (data) => {
  console.log('data', data)
  const url = urls.CART;
  return ajaxWrapper({
    method: 'PATCH',
    url,
    data
  })
}

export const getOrders = (data) => {
  const url = urls.CART;
  return ajaxWrapper({
    method: 'GET',
    url,
    data
  })
}

export const deleteOrder = (data) => {
  const url = urls.CART;
  return ajaxWrapper({
    method: 'DELETE',
    url,
    data
  })
}