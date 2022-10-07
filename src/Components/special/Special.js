import React, { createContext, useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';



const Special = () => {
    const [house,setHouse] =useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p><small>gift :{house}</small></p>
            <button onClick={()=>setHouse(house+1)}>increase</button>
            
        </div>
    );
};

export default Special;