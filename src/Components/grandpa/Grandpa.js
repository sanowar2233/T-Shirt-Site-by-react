import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext=createContext('matir ring')
export const moneyContext=createContext(555)

const Grandpa = () => {
   const [house,setHouse]=useState(1)
   const [money, setMoney]=useState(555);
    const ring='dimond ring'
    return (
      <RingContext.Provider value={[house,setHouse]}>
         {/* <moneyContext.Provider value={money}> */}
         <moneyContext.Provider value={[money,setMoney]}>
         <div className='grandpa'>
            <h1>Grandpa</h1>
            <section className='flex'>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
         </moneyContext.Provider>
      </RingContext.Provider>
    );
};

export default Grandpa;