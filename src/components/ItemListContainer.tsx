import Item from './Item'
import { ItemListProps } from '@/shared/interfaces/item.interface'

export default function ItemListContainer({ items, title }: ItemListProps) {

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-amber-100 top-0 z-50 p-8">
      <span className="text-2xl text-amber-700"> {title} </span>
      <ul className='space-y-4'>
        { items.map( (item) => (<Item item={item} key={item.id} />))}
      </ul>
    </div>
  )
}