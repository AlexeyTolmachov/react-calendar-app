import { format } from 'date-fns';

import React from 'react';

const Nowyear = () => {
    const year  = format(new Date(), 'uuuu')
    return (
       <h1>{year}</h1>
    );
}

export default Nowyear;
