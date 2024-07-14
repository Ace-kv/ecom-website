import '@/app/cart/styles.css'
import { ShoppingBag } from 'lucide-react'

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <h2>Shopping Cart</h2>
            <div className="cart-container">
                <div className="cart-items">
                    <div className="empty-cart">
                        <ShoppingBag size={130} strokeWidth={1.5}/>
                        <h1>Your shopping bag is empty</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart