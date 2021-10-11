import { format } from 'date-fns';
import {React} from 'react';

const Nowweekday = () => {
    const date  = format(new Date(2021, 9, 12), 'cccc')
    return (
        <h2>{date}</h2>
    );
}

export default Nowweekday;
