import { useEffect } from 'react';
import sunny from '../assets/images/sunny1.jpg'
import { useState } from 'react';

const WeeklyBoard = () =>

{
    const[weekly,setWeekly]=useState('')
    useEffect(() => {
    fetch('weather.json').then(res=>res.json()).then(data=>setWeekly(data))
    },[])

    console.log(weekly.daily)

    return <div className='mt-5'>

        
        {/* weekly dashboard */}
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between '>
            <img className='w-44' src={sunny} alt="" />
            
            {/* weekly board */}

            <div>
                <p>Sun</p>
                <p>image</p>
                <p>degree</p>
            </div>
        </div>
    </div>
}

export default WeeklyBoard;