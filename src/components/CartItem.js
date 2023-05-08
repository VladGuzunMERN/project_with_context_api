import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import './CartItem.css'
const CartItem = ({item}) => {
   const {removeItem} = useContext(CartContext)
     return (
      <li className='CartItem__item'>
         <img src={item.image} alt=''/>
         <div>
            {item.name}
         </div>
         <button className='CartItem__button' onClick={()=>removeItem(item._id)}>remove</button>
      </li>
     )
}
export default CartItem
