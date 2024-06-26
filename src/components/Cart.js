import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemLists from "./ItemLists";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto" >
                <button onClick={handleClearCart} className="p-2 m-2 text-white bg-black rounded-lg">Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart!</h1>}
                <ItemLists items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;