import  React, { useState , useEffect } from 'react'
import style from './style.module.css'

export const DateTime = () => {

//     const longMonthFormat = new Intl.DateTimeFormat('en-US', {
//     year:  'numeric',
//     month: 'long',
//     day:   'numeric',

    
// });

const today = new Date().toLocaleDateString('en-GB', {  
    day:   'numeric',
    month: 'short',
    year:  'numeric',
});
// console.log(today)


    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={style.dateTime}>
            <p>{today}</p>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime