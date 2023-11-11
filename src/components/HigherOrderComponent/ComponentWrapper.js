import Loader from "../Loader/Loader";
import { useSelector } from 'react-redux';

function ComponentWrapper(OriginalComponent) {
    return function LoadComponent() {
        const loadingState = useSelector(state => state.loading);

        return !loadingState ? <Loader /> : <OriginalComponent />;
        // return <>
        //  <Loader /> {loadingState && <OriginalComponent />}
        // </>;
    }
}

export default ComponentWrapper;
