import React, { useCallback, useContext } from 'react';
import { moneyContext } from '../grandpa/Grandpa';

const Sister = ({house}) => {
    const [money,setMoney]=useContext(moneyContext)
    return (
        <div>
            <h1>Sister</h1>
            <p><small>House:{house}</small></p>
            <p>{money}</p>
            <button onClick={()=>setMoney(money+1000)}>add 1000</button>
        </div>
    );
};

export default Sister;