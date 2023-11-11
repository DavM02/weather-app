import './AppHeader.css'
import CurrentDate from '../../userData/CurrentDate'
import { RowEvenly } from '../../helpingClasses/HelpingClasses'
import CurrentTemperature from '../WeatherData/CurrentTemperature/CurrentTemperature'
import WeatherDescription from '../WeatherData/WeatherDescription/WeatherDescription'
 

const AppHeader = () => {


    return <div className="app-header glass">
        <RowEvenly>
            <div>
                <div><CurrentTemperature></CurrentTemperature></div>
                <div><WeatherDescription></WeatherDescription></div>
            </div>
            <CurrentDate></CurrentDate>
        </RowEvenly>
    </div>
}

export default AppHeader