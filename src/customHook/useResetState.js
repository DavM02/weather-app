import { currentTempSliceActions } from "../store/currentTempSlice"
import { useDispatch } from "react-redux";

function useResetState() {

    const dispatch = useDispatch()

    function resetState(status, message) {
        dispatch(currentTempSliceActions.getErrorState({
            status: status,
            message: message
        }));
        dispatch(currentTempSliceActions.getLoadingState());
        dispatch(currentTempSliceActions.getCurrentTemp({}));
 
    }

    return {
        resetState
    }
}

export default useResetState