import React, { useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';

const Friend = () => {
   const [house,setHouse]=useContext(RingContext)
    return (
        <div>
            <h1>Friend</h1>
            <p>house: {house}</p>
            <button onClick={()=>setHouse(house-1)}>decrease</button>
        </div>
    );
};

export default Friend;