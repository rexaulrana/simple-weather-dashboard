import { useEffect } from 'react';
import sunny from '../assets/images/sunny1.jpg'
import { useState } from 'react';
import DayBoard from './DayBoard';

const WeeklyBoard = () =>

{
    const[weekly,setWeekly]=useState('')
    useEffect(() => {
    fetch('weather.json').then(res=>res.json()).then(data=>setWeekly(data))
    },[])

    // console.log(weekly?.daily?.map(d=>console.log(d)))

    return <div className='mt-5'>

        
        {/* weekly dashboard */}
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between '>
            <img className='w-44 md:mr-36' src={sunny} alt="" />
            
            {/* weekly board */}

            <div className=' grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3'>

                {weekly?.daily?.map(day => <DayBoard day={day}
                key={day.day}
                ></DayBoard>)}        
                
        
            </div>
        </div>
    </div>
}

export default WeeklyBoard;