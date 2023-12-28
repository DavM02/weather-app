import useImageLoader from "../../../../customHook/useImageLoader";

function ForecastData(props) {


    const { imageMap } = useImageLoader()

    const dateString = props.data.dt_txt
    const dateObject = new Date(dateString);

    const formattedTime = dateObject.toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
    });

    const renderDay = dateObject.toLocaleDateString('ru-RU', {  month: 'numeric', day: 'numeric' })

    return <>
        <div className="foreacast-date">
           <span>{renderDay},</span> {formattedTime}</div>
        <div className='foreacast-humidity'>humidity: {props.data.main.humidity}</div>
        <div className='foreacast-temp'>{props.data.main.temp} <i className="fa-solid fa-temperature-three-quarters"></i></div>
        <div className='foreacast-speed'>speed: {props.data.wind.speed}</div>
        <div className='foreacast-description'> {props.data.weather[0].description} </div>
        <div className="forecast-image">
            <img src={imageMap[props.data.weather[0].description.replace(/ /g, '_')]} alt={props.data.weather[0].description} />
        </div>
    </>
}

export default ForecastData