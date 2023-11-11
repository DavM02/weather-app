 import './WeatherApp.css'
 
import Center from '../../helpingClasses/HelpingClasses'
const WeatherApp = (props) => {
    return <main>
        <section className="weather-app-wrapper">
            <div className="weather-app">
                <Center>
                    {props.children}
                </Center>
            </div>
        </section>
    </main>
}



export default WeatherApp