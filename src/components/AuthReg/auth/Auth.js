import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from "../../../services/service";

import './auth.scss';

const schema = yup.object().shape({
	email: yup
		.string()
		.email()
		.required('Email must be field'),
	password: yup
		.string()
		.required('Password must be field')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		)
});

const Auth = () => {
	const [auth, setAuth] = useState(false);
	const [message, setMessage] = useState({
		status: false,
		content: ''
	})
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const getToken = (data) => {
		login(data)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				setAuth(true)
			})
			.catch((e) => {
				setMessage({
					status: true,
					content: e.response.data.message
				})
			})
	}

	const onSubmit = (data) => {
		const user = {
			email: data.email,
			password: data.password
		}
		getToken(user)
	}

	return (
		<div className='wrapper-auth-reg'>
			<div className='container-auth'>
				<h3>Log in to your account</h3>
				<div id='form-container'>
					<form onSubmit={handleSubmit(onSubmit)} id='auth'>
						<p>{errors.name?.message}</p>
						<label>Email</label>
						<input
							className={errors.email && 'error'}
							id='email'
							{...register('email')}
						/>
						<p>{errors.email?.message}</p>
						<label>Password</label>
						<input
							className={errors.password && 'error'}
							id='password'
							type='password'
							{...register('password')}
						/>
						<p>{errors.password?.message}</p>
						<button type='submit'>Login</button>
					</form>
					{auth && <Redirect from='auth' to='/cart' />}
				</div>
				{message.status && <div className='message'>{message.content}</div> }
			</div>
		</div>
	)
}

export default Auth;