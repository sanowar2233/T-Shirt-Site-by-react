import React from 'react';

const Cart = ({cart,handleRomoveItem}) => {
    return (
        <div>
            <h3>order summary</h3>
            <h5>order quantity: {cart.length}</h5>
            {
                cart.map(tshirt=><p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRomoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;