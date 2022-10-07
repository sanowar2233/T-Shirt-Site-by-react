import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../Tshirt/Tshirts';
import './Home.css'

const Home = () => {
    const tshirts=useLoaderData()
    const [cart,setCart]=useState([])

    const handleAddtoCart=tshirt=>{
        const exists=cart.find(ts=>ts._id==tshirt._id)
        if(exists){
            alert('t-shirt added')
        }else{
            const newCart=[...cart,tshirt];
        setCart(newCart)
        // alert('successfully added')

        }
    }

    const handleRomoveItem = tshirt => {
        
        
        const remaining =cart.filter(ts=>ts._id !== tshirt._id);
        setCart(remaining)
    }


    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
            {
                tshirts.map(tshirt=><Tshirts key={tshirt.id}tshirt={tshirt} handleAddtoCart={handleAddtoCart}></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                {
                    <Cart cart={cart} handleRomoveItem={handleRomoveItem}>

                    </Cart>
                }

            </div>
        </div>
    );
};

export default Home;