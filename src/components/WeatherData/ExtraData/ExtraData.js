import './ExtraData.css'
import { useSelector } from 'react-redux'
import img1 from '../../../assets/sunset.svg'
import img2 from '../../../assets/sunrise.svg'
import ComponentWrapper from '../../HigherOrderComponent/ComponentWrapper'
import Center from '../../../helpingClasses/HelpingClasses'

function ExtraData() {
    const weatherForCurDay = useSelector(state => state.weatherForCurDay);

    const icon1 = <div className='weather-icon'><img src={img1} /></div>
    const icon2 = <div className='weather-icon'><img src={img2} /></div>
    const icon3 = <div className='weather-icon'> <i className="fa-solid fa-wind" ></i> </div>
    const icon4 = <div className='weather-icon'> <i className="fa-solid fa-water"></i> </div>

    const Data = [
        {
            type: 'sunset time:',
            icon: icon1,
            info:  function() {
                let unixTimestamp =  weatherForCurDay?.sys?.sunset;   
                let date = new Date(unixTimestamp * 1000);  
                const options = { hour: '2-digit', minute: '2-digit', hour12: false };
                return date.toLocaleTimeString(undefined, options);
            }
        },
        {
            type: 'sunrise time:',
            icon: icon2,
            info: function() {
                let unixTimestamp =  weatherForCurDay?.sys?.sunrise; 
                let date = new Date(unixTimestamp * 1000); 
                const options = { hour: '2-digit', minute: '2-digit', hour12: false };
                return date.toLocaleTimeString(undefined, options);
            }
        },
        {
            type: 'wind speed:',
            icon: icon3,
            info: weatherForCurDay?.wind?.speed,
        },
        {
            type: 'humidity:',
            icon: icon4,
            info: weatherForCurDay?.main?.humidity,
        },
    ];



  
    const renderData = Data.map(data => {
        const WrappedComponent = ComponentWrapper(() => (
            <Center key={data.type}>
                {data.icon}
                  {data.type} {typeof data.info === 'function' ? data.info() : data.info}
            </Center>
        ));
        return <WrappedComponent key={data.type} />;
    });



    return <ul>{renderData.map((li, i) => {
        return <li className='glass' key={i}>
            <Center>
                {li}
            </Center>
        </li>
    })}</ul>;
}

export default ExtraData;