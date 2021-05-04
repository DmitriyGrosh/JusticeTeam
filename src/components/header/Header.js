import './Header.css';
import {Button} from "antd";
import list from './../images/list.svg';
import cart from './../images/cart.svg';
import hexagon from './../images/hexagon.svg';
import Menu from './Menu'

const Header = () => {

    const menu = [
        {
            info: 'Starter Store',
            img: hexagon
        },
        {
            info: 'Sign up',
            img: ''
        },
        {
            info: 'Sign in',
            img: ''
        },
        {
            info: 'Cart(0)',
            img: cart
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