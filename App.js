import React from 'react';
import Cart from './cart'
import CartItem from './CartItem';
import Navbar from'./Navbar '
import * as firebase from 'firebase';
class  App extends React.Component() {

  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
    this.db=firebase.firestore()
  }
    componentDidMount(){
        // firebase.
        // firestore().
        // collection('products').
        // get().
        // then((snapshot)=>{
        //  console.log(snapshot)
        //  snapshot.docs.map((doc)=>{
        //  console.log(doc.data())
        //  })
        //  const products=snapshot.docs.map((doc)=>{
        //      const data=doc.data()
        //      data['id']=doc.id
        //      return data;
        //  })
        //  this.setState({
        // products,
        // loading:false
        //  })

        // })
    

    this.db.
        collection('products').
        orderBy('quantity','asc')
        // where('price','==',99).
        // where('title','==','mouse')
        onSnapshot((snapshot)=>{
         console.log(snapshot)
         snapshot.docs.map((doc)=>{
         console.log(doc.data())
         })
         const products=snapshot.docs.map((doc)=>{
             const data=doc.data()
             data['id']=doc.id
             return data;
         })
         this.setState({
        products,
        loading:false
         })

        })

    }

   

    handleIncreaseQuantity=()=>{
        console.log('hey please inc the quantity of',products)
    
     const{products}=this.state;
    
     const index=products.indexof(products)
    //  products[index].quantity=+1
    //  this.setState({
    //     products

    const docRef=this.db.collection('products').doc(products[index].id)

 docRef.uptade({
    quantity:products[index].quantity+1
 }).then(()=>{
    console.log('updated succesfully')
 }).catch(()=>{
    console.log('error occured')
 })

     
      

    }

    handleDecreaseQuantity=()=>{
        console.log('hey please decrease the quanttity of',products)
        const{products}=this.state
        index=indexof(products)
        products[index].quantity=-1
        if(products[index].quantity===0){
            return
        }
        // this.setState({
        //     products,
            
        // })

        const docRef=this.db.collection('products').doc(products[index].id)

        docRef.uptade({
           quantity:products[index].quantity-1
        }).then(()=>{
           console.log('updated succesfully')
        }).catch(()=>{
           console.log('error occured')
        })
       

    }
}

handleDeleteProduct=()=>{
    const{products}=this.state;
    // const items=products.filter((items)=>items.id!==id)
    // this.setState({
    //     products:items
    // })
    const docRef=this.db.collection('products').doc(products[index].id)
    docRef
    .delete()
    .then(()=>{
        console.log("deleted succesfully")
    }).catch(()=>{
        console.log('error occured')
     })

}

getCartCount=()=>{
    const{products}=this.state
    let Count=0
    products.forEach((products)=>{
        count+=products.quantity
        
    })
    

    return count
}
getCartTotal=()=>{
    const{products}=this.state;
    let CartTotal=0;
    products.map((products)=>{
CartTotal=CartTotal+products.quantity*products.price
    })
    return CartTotal;
}

addProduct=()=>{
this.db
.collection('products')
.add({
img:'',
title:'washing machine',
quantity:1,
price:5999
}).then((docRef)=>{
    console.log('product has been added',docRef)
}).catch((error)=>{
    console.log('error occured',error)
})

}

 


  render(){
     return (
     <div className="App">
      <Navbar count={this.getCartCount()} />
      {/* <button onClick={this.addProduct}>Add a product</button> */}
      <CartItem/>
       <cart
     products={products}
        onIncreaseQuantity={props.handleIncreaseQuantity}
        onDecreaseQuantity={props.handleDecreaseQuantity}
        onDeleteProduct={props.handleDeleteProduct}
     />
     {loading && <h1>loading product...</h1>}
     <div>TOTAL:{this.getCartTotal()}</div>
     </div>
   );
 } 
}


export default App;
