import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("Header Render")
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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