'use client'

import Item from "@/components/Item";
import ItemListContainer from "@/components/ItemListContainer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart";

const CartPage = () => {
  const { totalItems, cart } = useCart()
  
  return (
    <div className="text-0xl text-amber-700">
      <div className="container space-x-2 p-2">
        <div className="text-2xl font-bold">
          Total de itens: {totalItems}
        </div>
        
        
      </div>
    </div>
  )
}

export default CartPage;