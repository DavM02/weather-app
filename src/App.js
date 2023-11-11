import WeatherApp from "./components/WeatherApp/WeatherApp";
import GetLocation from './userData/GetLocation'
import { useState } from "react";
import AppBody from "./components/AppBody/AppBody";
import useResetState from "./customHook/useResetState";

function App() {

  const [getAppState, setAppState] = useState({ showApp: false, city: '' })
const {resetState} = useResetState()

  function enterApp(appState) {
    setAppState(appState)

  }

  function goToApp() {
    setAppState({ showApp: false, city: '' });
    resetState(false, '')
  }

  return (
    <div className="App">
      <WeatherApp>
        {
          !getAppState.showApp ? (<GetLocation onEnterApp={enterApp}></GetLocation>
          ) : (

            <AppBody onGoToApp={goToApp} city={getAppState.city}></AppBody>

          )
        }

      </WeatherApp>
    </div>
  );
}

export default App;
