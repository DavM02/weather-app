import AppHeader from "../AppHeader/AppHeader"
import WeatherImage from "../WeatherData/WeatherImage/WeatherImage"
import ExtraData from "../WeatherData/ExtraData/ExtraData"
import Center from "../../helpingClasses/HelpingClasses"
import Button from "../UI/Button"
import { useSelector, useDispatch } from "react-redux"
import ErorrModal from "../ErrorModal/ErrorModal"
import WeatherFor5Days from "../WeatherData/WeatherFor5Days/WeatherFor5Days"
import RenderForecast from "../WeatherData/WeatherFor5Days/RenderForecast"

function AppBody(props) {

    const error = useSelector(state => state.error.status)

 

    const showForecast = useSelector(state => state.showForecast)

    function goToAppHandler() {
        props.onGoToApp();

    }



    if (error) {
        return <ErorrModal onClick={goToAppHandler}></ErorrModal>
    } else {
        return <>

            {showForecast ? <RenderForecast city={props.city}></RenderForecast> : <>
                <h1>{props.city}</h1>
                <div className="glass" style={{ height: '170px' }}>
                    <Center>
                        <WeatherImage></WeatherImage>
                    </Center>
                </div>
                <AppHeader></AppHeader>
                <ExtraData></ExtraData>
                <WeatherFor5Days city={props.city} ></WeatherFor5Days>
                <Button onClick={goToAppHandler} text='go back'></Button>
            </>}


        </>
    }


}

export default AppBody