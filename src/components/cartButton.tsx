'use client'

import Link from 'next/link'
import { Button } from "./ui/button"
import { ShoppingCart } from 'lucide-react'
import { useCartContext } from '@/app/cart-context'


const CartButton = () => {
    const { itemCount } = useCartContext()

    return (
        <Link href={'/cart'}>
            <Button 
                className="hidden lg:flex bg-gray-100 rounded-full w-[50px] h-[50px] p-0 relative hover:scale-110 
                        hover:bg-gray-100 transition ease-in duration-200"
            >
                <ShoppingCart className="cart-icon" size={22} color="black"/>
                <span className="cart-item-qty">{itemCount}</span>
            </Button>
        </Link>
    )
    
}

export default CartButton