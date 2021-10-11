import { format } from 'date-fns';

import React from 'react';



const Numberday = () => {
    const dateDAy = format(new Date(), 'dd')
    return (
        <h1>{dateDAy}</h1>
    );
}

export default Numberday;



