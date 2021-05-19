import { ajaxWrapper } from "../helpers/ajaxWrapper";
import { urls } from '../helpers/constant';

export const login = (data) => {
  const url = urls.AUTH
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  });
};

export const registerUser = (data) => {
  const url = urls.REG
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  })
}