import useRequest from "./useRequest";
import { useDispatch, useSelector } from "react-redux";
import { currentTempSliceActions } from "../store/currentTempSlice";
function useValidation() {

    const { fetchData } = useRequest()

    const city1 = useSelector(state => state.weatherForCurDay?.name)

    const city2 = useSelector(state => state.weatherFor5Days?.city?.name)

    const weatherFor5Days = useSelector(state => state.weatherFor5Days)

    const dispatch = useDispatch()

    const apiKey = 'e402994838a214ab0c5e6cbb0e1004f3';

    function validateInput(city, getCurrentTemp, type) {
        if (city.trim().length === 0) {
            dispatch(currentTempSliceActions.getErrorState({
                status: true,
                message: 'A city cannot be empty'
            }));
            dispatch(currentTempSliceActions.getLoadingState());
        } else {
            const url = `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${apiKey}&units=metric`;

            if (city1 && city2 && city1.toLowerCase() === city2.toLowerCase()) {
                dispatch(currentTempSliceActions.getLoadingState());
                dispatch(currentTempSliceActions.getTempFor5Days(weatherFor5Days))
                console.log('request is not sent')
            } else {
                dispatch(fetchData(url, getCurrentTemp));
                console.log('request is sent')
            }
        }
    }

    return {
        validateInput
    }
}

export default useValidation