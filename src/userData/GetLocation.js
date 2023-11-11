import UserInput from "../components/UI/UserInput"
import { useEffect, useState } from "react"
import Center from "../helpingClasses/HelpingClasses"
import Button from "../components/UI/Button"
 
import useValidation from "../customHook/useValidation"
 
const GetLocation = (props) => {

    const {validateInput} = useValidation()


    const [showApp, setShowApp] = useState(false)
    const [city, setCity] = useState('')

    const dependency = null
 
    function appStateHandler(e) {
        e.preventDefault();
        setShowApp(true);
        validateInput(city, 'getCurrentTemp', 'weather', dependency)

    }
    
    useEffect(() => {
        const appState = {
            showApp: showApp,
            city: city
        }
        props.onEnterApp(appState)
    }, [showApp])


    function setValue(e) {
        setCity(e.target.value)
 
    }

    return <>
        <form onSubmit={appStateHandler} >
            <Center>
                <UserInput value={city} onChange={setValue} placeholder='write your city'></UserInput>
                <Button type='submit' text={'submit'}/>

            </Center>
        </form>

    </>
}
export default GetLocation
