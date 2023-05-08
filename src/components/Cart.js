import {useContext} from 'react'
import './Cart.css'
import CartContext from '../context/cart/CartContext'
import CartItem from './CartItem'

const Cart = () => {
    const {showCart,cartItems,showhideCart} = useContext(CartContext)
    
    return <>
                {showCart && (
                    <div className='cart__wrapper'>
                        <div style={{textAlign:'right'}}>
                            <i style={{cursor:'pointer'}} 
                                className='fa fa-times-circle'
                                arai-hidden='true'
                                onClick={showhideCart}
                            ></i>
                        </div>
                        <div className='cart__innerWrapper'>
                            {cartItems.length === 0 ? <h3>Cart empty</h3> : (
                                <ul>
                                    {cartItems.map(item => {
                                        return <CartItem key={item.id}
                                                         item={item}
                                        />
                                    })}
                                </ul>
                            )}
                        </div>
                        <div className='Cart__cartTotal'>
                            <div>Total</div>
                            <div></div>
                            <div style={{marginLeft:'5px'}}>
                                {cartItems.reduce((amount,item)=> item.price + amount,0)}
                            </div>
                        </div>
                    </div>
                )}
                

            </>
}

export default Cart