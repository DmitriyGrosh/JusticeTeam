import Menu from './Menu';
import './Header.scss';
import list from './../images/list.svg';
import cart from './../images/cart.svg';
import hexagon from './../images/hexagon.svg';

const Header = () => {

    const ids = require('short-id');

    const menu = [
        {
            info: 'Starter Store',
            img: hexagon,
            id: ids.generate()
        },
        {
            info: 'Sign up',
            img: '',
            id: ids.generate()
        },
        {
            info: 'Sign in',
            img: '',
            id: ids.generate()
        },
        {
            info: 'Cart(0)',
            img: cart,
            id: ids.generate()
        },
        {
            info: '',
            img: '',
            id: ids.generate()
        }
    ]

    const change = () => {
        let header = document.querySelector('.header');
        let info = document.getElementsByClassName('info')
        header.classList.toggle('active');

        Array.from(info).forEach((e) => {
            e.classList.toggle('visible')
        })
    }

    return (
        <header className={'header'}>
            <div className={'container-header'}>
                <div onClick={change} className={'menu-burger'}>
                    <img src={list}/>
                </div>
                <Menu menu={menu}/>
            </div>
        </header>
    )
}

export default Header;