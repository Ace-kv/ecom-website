'use client'
 
import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

interface CartContextType {
  itemCount: number;
  setItemCount: Dispatch<SetStateAction<number>>;
  unitCount: number,
  setUnitCount: Dispatch<SetStateAction<number>>
}
 
export const CartContext = createContext<CartContextType | undefined>(undefined)
 
const CartCountProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

    const [itemCount, setItemCount] = useState(0);
    const [unitCount, setUnitCount] = useState(1)

    return (
    <CartContext.Provider value={{
      itemCount,
      setItemCount,
      unitCount,
      setUnitCount
      }}>
      {children}
    </CartContext.Provider>
    )
}

export default CartCountProvider

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('CartContext is Undefined')
  }

  return context
}