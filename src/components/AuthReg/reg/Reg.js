import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Cart from '../../cart/Cart';
import ProtectedRouter from '../../main/ProtectedRouter';

import './reg.scss'

const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Name should not contained numbers')
		.required('Name must be field'),
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

const Reg = (props) => {

	const { login } = props;

	const { register, handleSubmit, formState: { errors } } = useForm({
			resolver: yupResolver(schema)
		}	);

	const [checkAuth, setAuth] = useState(false);
	const [checkReg, setReg] = useState(true);

	const onSubmit = (data) => {
		let users = JSON.parse(localStorage.getItem('listOfUsers'));
		const user = {
			name: data.name,
			email: data.email,
			password: data.password
		};

		let checkUserForExistence = false;

		users.forEach((e) => {
			if (e.email === user.email) {
				checkUserForExistence = true;
			}
		})

		if (!checkUserForExistence) {
			users.push(user);
			setAuth(true);
			login();
			localStorage.setItem('listOfUsers', JSON.stringify(users));
			localStorage.setItem('auth', JSON.stringify(true));
		} else {
			setReg(false);
		}
	}

	return (
		<div className='wrapper-auth-reg'>
			<div className='container-reg'>
				<h3>Create an account</h3>
				<div id='form-container'>
					<form onSubmit={handleSubmit(onSubmit)} id='reg'>
						<label>Name</label>
						<input
							className={errors.name && 'error'}
							id='name'
							{...register('name')}
						/>
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
						<button type='submit'>Register</button>
					</form>
					{checkAuth && <Redirect from='reg' to='/home' />}
				</div>
				{!checkReg && <div className='message'>There is already a user with the same Email</div>}
			</div>
		</div>

	)
}

export default Reg;