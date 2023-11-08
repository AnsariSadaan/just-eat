import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Render")
    useEffect(()=>{
        console.log('useEffect is called');   
    }, [])
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=> 
                        btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')
                        }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;