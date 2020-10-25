import React from 'react'
import CartItem from './CartItem'

const cart=()=>{

        const{products}=props;
        return(
        <div className="cart-list">
            {products.map((products)=>{
                return(
                     <CartItem 
                     products={products}
                     key={products.key}
                     onIncreaseQuantity={props.handleIncreaseQuantity}
                     onDecreaseQuantity={props.handleDecreaseQuantity}
                     onDeleteProduct={props.handleDeleteProduct}
                     />
                )
            }) }
            
        </div>
        )
}



export default Cart;