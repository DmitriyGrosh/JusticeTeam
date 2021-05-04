import './main.css'
import 'antd/dist/antd.css';
import Header from "../header/Header";
import StarterStore from "../starterStore/StarterStore";


const Main = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <StarterStore/>
        </div>
    )
}

export default Main