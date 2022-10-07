import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRomoveItem}) => {

    let message;
    if(cart.length===0){
        message=<p>please buy at least one</p>
    }else if(cart.length===1){
        message= <div>
            <p>amr ekta naw</p>
            <p>tomar jonno r ekta naw</p>

        </div>
    }
    else{
        message=<p>Thanks for buy</p>
    }


    return (
        <div className={cart.length===2 ?`orange` : `white`}>
            <h3>order summary</h3>
            <h5>order quantity: {cart.length}</h5>
            {
                cart.map(tshirt=><p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRomoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length===3  ? <p>tin jon ke gift diba</p> : <p>kino kino</p>
            }
            {
                cart.length===2 && <h2>Double Item</h2>

            }
            {
                cart.length===4 || <p>4 ta item na</p>
            }
        </div>
    );
};

export default Cart;