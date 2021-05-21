import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRouter = (
	{
		component: Component,
		logout: logout,
		auth: auth,
		...rest
	}) =>
{
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth) {
					return <Component logout={logout} />
				} else {
					return <Redirect to='/cart' />
				}
			}}
		/>
	);
}

export default ProtectedRouter;