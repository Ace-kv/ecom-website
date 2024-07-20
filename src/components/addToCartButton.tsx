"use client"

import { ShoppingCart } from "lucide-react"
import SProduct from "@/app/types/product"
import { useCartContext } from "@/app/cart-context"
import { toastSuccessAlert } from "./ui/toastifySuccessAlert"

const handleAddToCartBtn = async (
    item: SProduct, 
    itemQty: number
    ) => {
    const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product_id: item._id,
            quantity: itemQty
        })
    })

    const result = res.json()
    console.log(result);
}

const AddToCartBtn = ({ item }: { item: SProduct }) => {
    const { itemCount, setItemCount, unitCount } = useCartContext()

    const handleClick = () => {
        const newItemCount = unitCount;
        const cartItemCount = unitCount + itemCount
        setItemCount(cartItemCount);
        handleAddToCartBtn(item, newItemCount);
        toastSuccessAlert(
            `${newItemCount} ${item.title}${newItemCount > 1 ? 's' : ''} added to the cart`,
            'item(s)-added-cart'
        )
    }

    return (
        <>
            <button 
                className="flex justify-center items-center gap-2 text-white bg-[#212121] text-base
                        leading-4 font-semibold py-3 px-4 rounded-sm"
                onClick={handleClick}
            >             
                <ShoppingCart />
                Add to Cart
            </button>
         </>
    )
}

export default AddToCartBtn