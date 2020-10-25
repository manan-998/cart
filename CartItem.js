import React from 'react'

const Navbar=(props)=>{

  
        const{title,price,quantity}=props;
        const{onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct,product}=props
        return(
            <div className="cart-item">
             <div className="right-block">
              <img style={style.image} src={product.img}/>
             </div>
             <div className="left-block">
             <div style={ {fontSize:25} }>{title}</div>
             <div style={ {color:"#777"} }>rs{price}</div>
             <div style={ {color:"#777"}}>qty:{quantity}</div>
             <div className="cart-item-actions">
             <img
              alt=""
              className="action-icons" 
              src="https://www.flaticon.com/premium-icon/icons/svg/3446/3446451.svg"
              onClick={()=>onIncreaseQuantity(product)}
              ></img>
             <img 
             alt=""
              className="action-icons"
               src="https://www.flaticon.com/svg/static/icons/svg/814/814039.svg"
               onClick={()=>onDecreaseQuantity(product)}
               >

               </img>
             <img alt=""
              className="action-icons"
               src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
               onClick={()=>onDeleteProduct(product)}
               >

               </img>
             
             </div>
             </div>
            </div>
        )
   }



const style={
    image:{
        height:110,
        width:110,
        borderRadius:10,
        backgroundColor:'#777'
    }
}

export default CartItem;