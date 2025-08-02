import { Check, X } from 'lucide-react';
import { ItemComponent } from '@/shared/interfaces/item.interface';
//import { CartItem } from '@/contexts/cart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function Item (item: CartItem ) {
  
  return (
    
    <div key={item.id}
      className={`p-4 border ${true
          ? 'border-amber-400 bg-white/95 text-black-95'
          : 'border-amber-800 bg-white/950 text-black-950'
        } transition-all`}
    >
      <div className="flex items-center gap-4">
        <div className={`${false
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          {item ? <Check /> : <X />}
          {item.quantity}
        </div>

        <div className={` ${false
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          <span className={`text-lg font-light tracking-wide ${true ? '' : 'line-through' }`}>
            {item.name}
          </span>
        </div>
        <div className={` ${false
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          <span className={`text-lg font-light tracking-wide ${true ? '' : 'line-through'
            }`}>
            {item.quantity}
          </span>
        </div>

      </div>
    </div>
  
  )
}

export default Item;