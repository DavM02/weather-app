import { currentTempSliceActions } from "../store/currentTempSlice";


function useRequest() {

    function fetchData(url, getCurrentTemp) {
        return async function (dispatch) {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("City not found. Status: " + response.status);
                }

                const data = await response.json();

                if (!data) {
                    dispatch(currentTempSliceActions.getLoadingState());

                } else {
                    dispatch(currentTempSliceActions.getLoadingState());
                    dispatch(currentTempSliceActions[getCurrentTemp](data));
           
                }


            } catch (error) {
                dispatch(currentTempSliceActions.getErrorState(
                    {
                        status: true,
                        message: error.message
                    }));
                dispatch(currentTempSliceActions.getLoadingState());
            }
 
        };

    }


    return {
        fetchData
    }
}

export default useRequest