import { add, format } from "date-fns";

import Nowweekday from "./components/Calendar/NowWeekDay";
import "./App.css";
import Numberday from "./components/Calendar/NumberDay";
import Month from "./components/Calendar/Month";
import Nowyear from "./components/Calendar/NowYear";
function App() {
  const date = format(new Date(), "PPPP");
  const result = add(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 365,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  // const neewResult = format(result, 'y, M ,dd' ) 
console.log(result)


const dateDAy = format(result, 'dd')
const dateqwe  = format(result, 'cccc')
const month = format(result, 'MMMM')
const year  = format(result, 'uuuu')
   return(

    <>
   
    <h1>{dateDAy}</h1>
     <h1>{dateqwe}</h1>
     <h1>{month}</h1>
     <h1>{year}</h1>
      <h1>{date}</h1>
      <div className="Wrapper">
        <div className="DAyNumber">
          <Nowweekday />
          <Numberday />
        </div>
        <div className="itemName">
          <Month />
          <Nowyear />
        </div>
      </div>
    </>
  );
}

export default App;
