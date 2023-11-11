import { useSelector } from 'react-redux'
import ComponentWrapper from '../../HigherOrderComponent/ComponentWrapper'
import './WeatherDescription.css'

function WeatherDescription() {

    const weatherForCurDay = useSelector(state => state.weatherForCurDay)

    return <>
        <div className='weather-description'>
            {weatherForCurDay.weather[0].description}
        </div>
    </>
}

export default ComponentWrapper(WeatherDescription)