import './StarterStore.scss'
import logo from '../images/logo.svg'
import lamp1 from '../images/lamp1.png'
import lamp2 from '../images/lamp2.png'

const StarterStore = () => {

    const ids = require('short-id');

    const goods = [
        {
            img: lamp2,
            info: 'Gold',
            price: 243,
            currency: '$',
            id: ids.generate()
        },
        {
            img: lamp1,
            info: 'Blue Desk',
            price: 250,
            currency: '$',
            id: ids.generate()
        },
        {
            img: lamp2,
            info: 'Gold',
            price: 243,
            currency: '$',
            id: ids.generate()
        },
        {
            img: lamp1,
            info: 'Blue Desk',
            price: 250,
            currency: '$',
            id: ids.generate()
        }
    ]

    const goodsContent = goods.map( (element) =>
        <div data-price={element.price} key={element.id} className={'lamp'}>
            <div className={'lamp-img'}>
                <img src={element.img}/>
            </div>
            <div className={'lamp-information'}>
                <h2>{element.info}</h2>
                <p>{element.currency + element.price.toFixed(2)}</p>
            </div>
        </div>
    )

    return (
        <section className={'store'}>
            <img className={'logo'} src={logo}/>
            <div className={'container-store'}>
                {goodsContent}
            </div>
        </section>
    )
}

export default StarterStore;