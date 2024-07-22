import '@/app/cart/styles.css'
import { ShoppingBag } from 'lucide-react'
import { cookies } from 'next/headers'
import ToastErrorAlert from '@/components/ui/toastifyErrorAlert'
import { res as allProductData } from '../(categories)/(dynamicProductPage)/[...dynamicUrlSeg]/page'
import SProduct from '../types/product'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'

export interface DResult {
    id: number,
    user_id: string,
    product_id: string,
    quantity: number
}

const Cart = async () => {
    const user_id = cookies().get('user_id')?.value
    const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`, {
        method: 'GET'
    }).then(response => response.json())

    const product_ids: string[] = res.res.map((product: DResult) => product.product_id)

    const cartProducts = allProductData.filter((product: SProduct) => product_ids.includes(product._id))

    // TypeError: (0 , _utils_toastifyAlert__WEBPACK_IMPORTED_MODULE_3__.emptyCartAlert) is not a function
    // if (!res.ok) emptyCartAlert("Your Cart is Empty")

    console.log(res);

    return (
        <>    
            { !res && <ToastErrorAlert text='Your Cart is Empty' errId='empty-cart-err' />}
            <div className="cart-wrapper">
                <h2>Shopping Cart</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        {!res ? 
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