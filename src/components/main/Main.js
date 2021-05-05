import Header from "../header/Header";
import StarterStore from "../starterStore/StarterStore";
import './main.scss'


const Main = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <StarterStore/>
        </div>
    )
}

export default Main