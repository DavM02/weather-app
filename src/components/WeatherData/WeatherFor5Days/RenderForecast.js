import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { SwiperSlide } from 'swiper/react';
import './WeatherForecast.css'
import SwiperWrapper from "../../SwiperWrapper/SwiperWrapper";
import { currentTempSliceActions } from "../../../store/currentTempSlice";
import ForecastData from "./ForecastData/ForecastData";
import ComponentWrapper from "../../HigherOrderComponent/ComponentWrapper";
import Button from "../../UI/Button";


function RenderForecast() {
    const weatherFor5Days = useSelector(state => state.weatherFor5Days);

    const [forecast, setForecast] = useState([]);


    const dispatch = useDispatch()
    useEffect(() => {
        let newForecast = [];

        if (weatherFor5Days?.list) {



            for (let i = 0; i < weatherFor5Days.list.length; i += 8) {
                const subArr = weatherFor5Days.list.slice(i, i + 8);
                newForecast.push(subArr);
            }
            setForecast(newForecast);
            console.log(newForecast)
        }
    }, [weatherFor5Days]);

    console.log(weatherFor5Days)
    
    function backToPrevState() {
        dispatch(currentTempSliceActions.getForecast())
    }

    function renderYear(d) {
        const date = new Date(d)

        const fullDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long'})

        return fullDate
    }

 

    return (
        <>
            <Button onClick={backToPrevState} text='go back'></Button>
            <div className="weather-forecast">
                <SwiperWrapper >
                    {forecast.map((day, id) => (

                        <SwiperSlide key={id} >
                            <div className="forecast-day">{renderYear(day[0].dt_txt)}</div>
                            <div className="weather-forecast-wrapper">
                                {day.map((hour, j) => (
                                    < div className="forecast-for-hour" key={j} >
                                        <ForecastData data={hour} />
                                    </div>
                                ))}
                            </div>

                        </SwiperSlide>

                    ))}
                </SwiperWrapper>
            </div >
        </>
    );

}

export default ComponentWrapper(RenderForecast);
