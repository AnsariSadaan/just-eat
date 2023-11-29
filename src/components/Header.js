import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    const {loggedInUser} = useContext(UserContext);
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo">
                <img className="w-40 h-24 px-2 py-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
                    <button className=" bg-black text-white rounded-lg" onClick={()=> 
                        btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')
                        }>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;