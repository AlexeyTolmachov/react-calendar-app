import { format } from 'date-fns';
import React from 'react';

const Month = () => {
    const month = format(new Date(), 'MMMM')
    return (
       <h1>{month}</h1>
    );
}

export default Month;
