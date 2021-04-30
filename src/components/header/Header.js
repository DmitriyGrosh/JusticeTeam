import './Header.css'

const Header = () => {

    const classChange = (e) => {
        let lines = document.getElementsByClassName('line');
        let check = document.querySelector('.line');
        let burger = document.querySelector('.burger-text');
        let counter = 0;
        Array.from(lines).forEach((e) => {
            e.classList.toggle('change');
            burger.classList.toggle('active')
        })
    }


    return (
        <header>
            <div className="burger-menu">
                <div className="burger-menu-container">
                    <div className="menu">
                        <div className="menu-container" onClick={classChange} >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="burger-text">
                        <ul className="list">
                            <li>StarterStore</li>
                            <li>SignIn</li>
                            <li>SignUp</li>
                            <li>Cart(0)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="header-container">
                    <div className="store arrow">
                        <img alt={'xnj-nj'}/>
                        <p>StarterStore</p>
                    </div>
                    <div className="registration">
                        <div className="reg"><p>Sign up</p></div>
                        <div className="reg"><p>Sign in</p></div>
                        <div className="reg">
                            <img alt={'cart'}/>
                            <p>Cart (0)</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;