import './App.css';
import Header from "./components/header/Header";
import StarterStore from "./components/starterStore/StarterStore";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <StarterStore/>
        </div>
    </div>
  );
}

export default App;
