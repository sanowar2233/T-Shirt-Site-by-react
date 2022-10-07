import React, { useContext } from 'react';
import { moneyContext } from '../grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney]=useContext(moneyContext)
    return (
        <div>
            <h1>uncle</h1>
            <p><small>House:{house}</small></p>
            <p>money: {money}</p>
        </div>
    );
};

export default Uncle;