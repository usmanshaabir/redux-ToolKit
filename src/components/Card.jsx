import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../feature/Cards/cardSlice';

function Card() {
    const cartItems = useSelector(state => state.cart.items);
    console.log("cartItems", cartItems);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                    </li>
                ))}

            </ul>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
}

export default Card;
