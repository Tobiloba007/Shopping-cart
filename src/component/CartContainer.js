import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/Modal/ModalSlice'

const CartContainer = () => {
    const dispatch = useDispatch()
    const {cartItems, total, amount } = useSelector((store) => store.cart )

    if (amount < 1) {
        return (
        <div className="cart">
            <header>
                <h2>Your bag</h2>
                <div className="empty-cart">is currently empty</div>
            </header>
        </div>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <div className="btn clear-btn" onClick={() => dispatch(openModal())}>clear cart</div>
        </footer>
    </section>
  )
}

export default CartContainer