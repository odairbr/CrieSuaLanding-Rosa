import { Check, X } from 'lucide-react';

interface ItemComponent {
  item: ItemProps
}

interface ItemProps {
  id: number;
  name: string;
  amount: number;
  available: boolean;
}

function Item ({ item }: ItemComponent ) {
  return (
    
    <li key={item.id}
      className={`p-4 border ${item.available
          ? 'border-amber-400 bg-white/95 text-black-95'
          : 'border-amber-800 bg-white/950 text-black-950'
        } transition-all`}
    >
      <div className="flex items-center gap-4">
        <div className={`${item.available
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          {item.available ? <Check /> : <X />}
        </div>

        <div className={` ${item.available
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          <span className={`text-lg font-light tracking-wide ${item.available ? '' : 'line-through' }`}>
            {item.name}
          </span>
        </div>
        <div className={` ${item.available
            ? 'bg-amber-450 border-amber-95'
            : 'bg-amber-50 border-amber-950'
          }`}>
          <span className={`text-lg font-light tracking-wide ${item.available ? '' : 'line-through'
            }`}>
            {item.amount}
          </span>
        </div>

      </div>
    </li>
  
  )
}

export default Item;