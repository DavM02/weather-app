import clear_sky from '../assets/clear sky.svg'
import few_clouds from '../assets/few clouds.svg'
import broken_clouds from '../assets/broken clouds.svg'
import shower_rain from '../assets/shower rain.svg'
import rain from '../assets/rain.svg'
import thunderstorm from '../assets/thunderstorm.svg'
import snow from '../assets/snow.svg'
import mist from '../assets/mist.svg'
import scattered_clouds from '../assets/scattered clouds.svg'
import volcanic_ash from '../assets/volcanic ash.svg'
import overcast_clouds from '../assets/overcast clouds.svg'
import squalls from '../assets/squalls.svg'
import tornado from '../assets/tornado.svg'
import smoke from '../assets/smoke.svg'
import drizzle from '../assets/drizzle.svg'

function useImageLoader(img) {
    const weatherImg = img ? img.replace(/ /g, '_') : '';  
    const imageMap = {
        'overcast_clouds': overcast_clouds,
        'tornado': tornado,
        'clear_sky': clear_sky,
        'few_clouds': few_clouds,
        'broken_clouds': broken_clouds,
        'shower_rain': shower_rain,
        'rain': rain,
        'light_rain': rain,
        'moderate_rain': rain,
        'heavy_intensity_rain': rain,
        'very_heavy_rain': rain,
        'extreme_rain': rain,
        'freezing_rain': rain,
        'light_intensity_shower_rain': rain,
        'heavy_intensity_shower_rain': rain,
        'ragged_shower_rain': rain,
        'thunderstorm': thunderstorm,
        'thunderstorm_with_light_rain': thunderstorm,
        'thunderstorm_with_rain': thunderstorm,
        'thunderstorm_with_heavy_rain': thunderstorm,
        'light_thunderstorm': thunderstorm,
        'heavy_thunderstorm': thunderstorm,
        'ragged_thunderstorm': thunderstorm,
        'thunderstorm_with_light_drizzle': thunderstorm,
        'thunderstorm_with_drizzle': thunderstorm,
        'thunderstorm_with_heavy_drizzle': thunderstorm,
        'snow': snow,
        'light_snow': snow,
        'heavy_snow': snow,
        'sleet': snow,
        'light_shower_sleet': snow,
        'shower_sleet': snow,
        'light_rain_and_snow': snow,
        'rain_and_snow': snow,
        'light_shower_snow': snow,
        'shower_snow': snow,
        'heavy_shower_snow': snow,
        'mist': mist,
        'scattered_clouds': scattered_clouds,
        'volcanic_ash' : volcanic_ash,
        'squalls' :  squalls,
        'smoke': smoke, 'haze': smoke, 'fog': smoke, 'dust': smoke, 'sand': smoke,
        'light_intensity_drizzle': drizzle,
        'drizzle': drizzle,
        'heavy_intensity_drizzle': drizzle,
        'light_intensity_drizzle_rain': drizzle,
        'drizzle_rain': drizzle,
        'heavy_intensity_drizzle_rain': drizzle,
        'shower_rain_and_drizzle': drizzle,
        'heavy_shower_rain_and_drizzle': drizzle,
        'shower_drizzle': drizzle
    };

    const imgSrc = imageMap[weatherImg];

    return {
        imgSrc,
        imageMap
    }
}

export default useImageLoader;
