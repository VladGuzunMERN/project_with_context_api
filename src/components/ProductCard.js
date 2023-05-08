import { useContext } from 'react'
import './ProductCard.css'
import Rating from './Rating'
import CartContext from '../context/cart/CartContext'


const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext)
    
    return <div className='productCard__wrapper'>
                <div>
                    <img className='productCard__img' src={product.image} alt=''/>
                    <h3>{product.name}</h3>
                    <div className='ProductCard__price'>
                        <h4>{product.price}</h4>
                    </div>
                    <div className='ProductCard__Rateing'><Rating value={product.rating} text={`${product.numReviews} reviews`}/></div>
                    <button className='ProductCard__button' onClick={()=>{addToCart(product)}}>Add to card</button>
                </div>
           </div>
}
export default ProductCard