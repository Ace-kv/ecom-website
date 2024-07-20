import '@/app/cart/styles.css'
import { ShoppingBag } from 'lucide-react'
import { cookies } from 'next/headers'
import ToastErrorAlert from '@/components/ui/toastifyErrorAlert'

const Cart = async () => {
    const user_id = cookies().get('user_id')?.value
    const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`, {
        method: 'GET'
    })

    // TypeError: (0 , _utils_toastifyAlert__WEBPACK_IMPORTED_MODULE_3__.emptyCartAlert) is not a function
    // if (!res.ok) emptyCartAlert("Your Cart is Empty")

    console.log(res);

    return (
        <>    
            { !res.ok && <ToastErrorAlert text='Your Cart is Empty' errId='empty-cart-err' />}
            <div className="cart-wrapper">
                <h2>Shopping Cart</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        {!res.ok ? 
                            <div className="empty-cart">
                                <ShoppingBag size={130} strokeWidth={1.5}/>
                                <h1>Your shopping bag is empty</h1>
                            </div>
                            : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart