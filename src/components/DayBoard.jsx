import cloud from '../assets/images/cloud.jpg'
import sun from '../assets/images/sun.jpg'
import rainy from '../assets/images/cloud-rainyfull.jpg'
import cloudRain from '../assets/images/cloud-rainy.jpg'
import sunCloud from '../assets/images/sun-cloud.jpg'


const DayBoard = ({ day }) => {
    console.log(day.temperature.max)
    return <div>

        <p className='font-medium'>{day?.day}</p>
        
        {
            day?.weather?.description == "Partly cloudy" && <div>

                <img src={cloud} alt="" />
         <div className='flex justify-center gap-1'>

                <p className='font-medium'>{day?.temperature?.max}° -</p>
                <p className='font-medium opacity-50'>{day?.temperature?.min}° </p>
            </div>
                </div>
            
        }
        {
            day?.weather?.description == "Clear sky" &&<div>
                    <img src={sun} alt="" />
 <div className='flex justify-center gap-1'>

                <p className='font-medium'>{day?.temperature?.max}° -</p>
                <p className='font-medium opacity-50'>{day?.temperature?.min}° </p>
            </div>
                </div>
        }
        {
            day?.weather?.description == "Rainy" &&
            
            <div>
                <img src={rainy} alt="" />
 <div className='flex justify-center gap-1'>

                <p className='font-medium'>{day?.temperature?.max}° -</p>
                <p className='font-medium opacity-50'>{day?.temperature?.min}° </p>
            </div>
            </div>
        }
        {
            day?.weather?.description == "Cloudy" &&
            
            <div>

                    <img src={cloudRain} alt="" />
                     <div className='flex justify-center gap-1'>

                <p className='font-medium'>{day?.temperature?.max}° -</p>
                <p className='font-medium opacity-50'>{day?.temperature?.min}° </p>
                    </div>
                
            </div>
           
        }
        {
            day?.weather?.description == "Sunny" &&
            <div>

                    <img src={sunCloud} alt="" />
                    
                     <div className='flex justify-center gap-1'>

                <p className='font-medium'>{day?.temperature?.max}° -</p>
                <p className='font-medium opacity-50'>{day?.temperature?.min}° </p>
            </div>
            </div>
           
        }
    </div>
}

export default DayBoard;