import '@/app/cart/styles.css'
import { ShoppingBag } from 'lucide-react'
import { cookies } from 'next/headers'
import ToastErrorAlert from '@/components/ui/toastifyErrorAlert'
import getAllProductData from '@/lib/Product-Data/products'
import SProduct from '../types/product'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'

export interface DResult {
    id: number,
    user_id: string,
    product_id: string,
    quantity: number
}

const allProductData: SProduct[] = await getAllProductData()

const Cart = async () => {
    const user_id = cookies().get('user_id')?.value
    
    const res = await fetch(`https://ecom-website-amber.vercel.app/api/cart?user_id=${user_id}&_=${new Date().getTime()}`, {
        method: 'GET',
        cache: 'no-store'
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch request:', error);
        return null;
    });

    if (!res || !Array.isArray(res.res)) {
        console.error('Invalid response format:', res);
        return (
            <>
                <ToastErrorAlert text='Your Cart is Empty' errId='empty-cart-err' />
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
            </>
        );
    }

    const product_ids: string[] = res.res.map((product: DResult) => product.product_id)

    const cartProducts = allProductData.filter((product: SProduct) => product_ids.includes(product._id))

    // TypeError: (0 , _utils_toastifyAlert__WEBPACK_IMPORTED_MODULE_3__.emptyCartAlert) is not a function
    // if (!res.ok) emptyCartAlert("Your Cart is Empty")

    console.log(res);

    return (
        <>    
            { cartProducts.length === 0 && <ToastErrorAlert text='Your Cart is Empty' errId='empty-cart-err' />}
            <div className="cart-wrapper">
                <h2>Shopping Cart</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        {cartProducts.length === 0 ? 
                            <div className="empty-cart">
                                <ShoppingBag size={130} strokeWidth={1.5}/>
                                <h1>Your shopping bag is empty</h1>
                            </div>
                            : 
                            cartProducts.map((product: SProduct) => (
                                <div 
                                    className="item-card" 
                                    key={`cart-item-${product._id}`}
                                >
                                    <div className="item-image">
                                        <Image 
                                            src={urlForImage(product.big_image)}
                                            alt=''
                                            width={135}
                                            height={190}
                                        />
                                    </div>
                                </div>
                            ))
                            
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart