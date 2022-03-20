import logo from './logo.svg';
import './App.css';
import Menu from "./component/Menu/Menu.jsx"
import Products from './component/Products/Products';
import { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

function App() {

  const [count, setCount] = useState(0);
 
  const setCartCount = () =>{
    setCount(count + 1);
  }

  useEffect( ()=>{
    AOS.init();
  }, [])

  return (
    <div className="App">
    <Menu count={count}></Menu>
    <Products setCartCount={setCartCount}></Products>
    </div>
  );
}

export default App;
