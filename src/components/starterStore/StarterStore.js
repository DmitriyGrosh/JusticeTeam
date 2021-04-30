import logo from '../images/logo.svg'
import lamp1 from '../images/lamp1.png'
import lamp2 from '../images/lamp2.png'
import './StarterStore.css'

const StarterStore = () => {
    return (
        <div className='lamp-wrapper'>
            <div className='love-lamp'>
                <img className='logo' src={logo}/>
            </div>
            <div className='goods'>
                <div className='lamp-info'>
                    <div className='img-lamp'>
                        <img className='lamp' src={lamp1}/>
                    </div>
                </div>
                <div className='lamp-info'>
                    <div className='img-lamp'>
                        <img className='lamp' src={lamp2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarterStore;
