import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../sister/Sister';

const Father = ({house,ring}) => {
    
    return (
        <div>
            <h1>father</h1>
            <p><small>House:{house}</small></p>
            <section className='flex'>
                <Myself house={house}ring={ring}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;