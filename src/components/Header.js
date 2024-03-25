import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    const {loggedInUser} = useContext(UserContext);
    const cartItem = useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo">
                <img className="w-40 h-20 px-2 py-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 text-lg">
                    <li className="px-4">Status : {onlineStatus ? <span className="inline-block h-2 w-2 rounded-full bg-green-500 text-center"></span> : <span className="inline-block h-2 w-2 rounded-full bg-red-500 text-center"></span>}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/signin">Sign In</Link></li>
                    <li className="px-4"><Link to="/cart" className="flex justify-between items-center"> <BsCart2 /> Cart({cartItem.length})</Link></li>
                    {/* <button className=" bg-black text-white rounded-lg" onClick={()=> 
                        btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')
                        }>{btnName}</button> */}
                    {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}


export default Header;