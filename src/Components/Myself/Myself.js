import React from 'react';
import Special from '../special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h1>myself</h1>
            <p><small>House : {house}</small></p>
            <section>
                <Special ></Special>
            </section>
        </div>
    );
};

export default Myself;