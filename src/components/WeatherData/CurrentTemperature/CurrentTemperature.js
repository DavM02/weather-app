import { useSelector } from 'react-redux'
import ComponentWrapper from '../../HigherOrderComponent/ComponentWrapper'
import './CurrentTemperature.css'
import { Row } from '../../../helpingClasses/HelpingClasses'
function CurrentTemperature() {

    const weatherForCurDay = useSelector(state => state.weatherForCurDay)

    return <>
        <div className='current-temperature'>
            <Row>
                {parseFloat(weatherForCurDay.main.temp).toFixed()}
                <i className="fa-solid fa-temperature-three-quarters"></i>

            </Row>
        </div>
    </>
}

export default ComponentWrapper(CurrentTemperature)