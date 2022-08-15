import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increase, decrease } from '../features/cart/CartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, img, title, price, amount}) => {
    const dispatch = useDispatch()
  return (
    <div className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <div className="item-price">${price}</div>
            <div className="remove-btn" onClick={() => {
                dispatch(removeItem(id))
            }}>remove</div>
        </div>
        <div>
            <button className="amount-btn" onClick={()=>{
                dispatch(increase({id}))
            }}
            >
                <ChevronUp />
            </button>
            <div className="amount">{amount}</div>
            <button className="amount-btn" onClick={()=>{
                if(amount === 1){
                    dispatch(removeItem(id))
                }
                dispatch(decrease({id}))
            }}
            >
                <ChevronDown />
            </button>
        </div>
    </div>
  )
}

export default CartItem