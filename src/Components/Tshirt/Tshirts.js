import React from 'react';
import './Tshirt.css'

const Tshirts = ({tshirt,handleAddtoCart}) => {
    const {name,picture,price }=tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h1>Name:{name}</h1>
            <h4>Price:{price}</h4>
            <button onClick={()=>handleAddtoCart(tshirt)}>Buy This</button>
            
        </div>
    );
};

export default Tshirts;