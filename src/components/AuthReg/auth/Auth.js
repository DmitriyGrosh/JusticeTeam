import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const Auth = (props) => {

	const { login } = props;

	const [auth, setAuth] = useState(false);
	const [message, setMessage] = useState(true)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		const users = JSON.parse(localStorage.getItem('listOfUsers'));
		const user = {
			email: data.email,
			password: data.password
		};
		let checkUserForExistence = false;

		users.forEach((e) => {
			if (e.email === user.email && e.password === user.password) {
				checkUserForExistence = true;
			}
		})

		if (checkUserForExistence) {
			setAuth(true);
			login();
			localStorage.setItem('auth', JSON.stringify(true))
		} else {
			setMessage(false);
		}
	};

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
				{!message && <div className='message'>No such account exists yet</div> }
			</div>
		</div>
	)
}

export default Auth;