import Button from "../../UI/Button"
import useValidation from "../../../customHook/useValidation"
import { useDispatch, useSelector } from "react-redux"
import { currentTempSliceActions } from "../../../store/currentTempSlice"
import { useEffect } from "react"
 
function WeatherFor5Days(props) {
    const dispatch = useDispatch()
    const { validateInput } = useValidation()
 
    const weatherFor5Days = useSelector(state => state.weatherFor5Days)
    function getWeatherFor5Days(e) {
        e.preventDefault()
        dispatch(currentTempSliceActions.getForecast())
        dispatch(currentTempSliceActions.getLoadingState())
 
            validateInput(props.city, 'getTempFor5Days', 'forecast');
 

    }
 


    return <>

        <form onSubmit={getWeatherFor5Days} style={{ marginBottom: '10px' }}>
            <Button type='submit' text={'weather for 5 days'} />
        </form>
    </>
}

export default WeatherFor5Days