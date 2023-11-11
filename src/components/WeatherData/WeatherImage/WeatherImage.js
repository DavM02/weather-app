import { useSelector } from "react-redux"
import ComponentWrapper from "../../HigherOrderComponent/ComponentWrapper"
import {  useEffect } from "react";  
import useImageLoader from '../../../customHook/useImageLoader'
import Center from "../../../helpingClasses/HelpingClasses";


function WeatherImage() {
    const weatherForCurDay = useSelector(state => state.weatherForCurDay);

    const {imgSrc} = useImageLoader(weatherForCurDay.weather[0].description)
 
    return (
        <div className="current-weather-image" >
          <Center>
        <img style={{width: '60%'}} src={imgSrc} alt="Weather" />  
          </Center>
 
        </div>
    );
}

export default ComponentWrapper(WeatherImage);
