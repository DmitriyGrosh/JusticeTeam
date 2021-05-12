import Lamp from './Lamp'

import './StarterStore.scss'

import logo from '../images/logo.svg'

const StarterStore = (props) => {

	const { goods } = props;

	return (
		<section className='store'>
			<img className='logo' src={logo} />
			<div className='container-store'>
				<Lamp lampInfo={goods} />
			</div>
		</section>
	);
}

export default StarterStore;