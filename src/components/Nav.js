import './Nav.css'
import CartContext from '../context/cart/CartContext'  
import { useContext } from 'react'

const Nav = () => {
    const {cartItems,showHideCart} = useContext(CartContext)
    
    return <nav>
                <div className='nav__left'>
                    <h1>Products</h1>
                    <p>@Vlad project </p>
                </div>
                <div className='nav__middle'>
                    <div className='input_wrapper'>
                        <input type='text' />
                        <i className='fas fa-search'/>
                    </div>
                </div>
                <div className='nav__right'>
                    <div className='cart__icon'>
                        <i className='fa fa-shopping-cart' 
                            aria-hidden='true'
                            onClick={showHideCart}
                        />
                            
                        <div>
                            <span>{cartItems.length}</span>
                        </div>
                    </div>
                </div>
            </nav>
             
          

        
}
export default Nav