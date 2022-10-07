import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <h1>cousin</h1>
            <p><small>House:{house}</small></p>

            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;