import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weatherForCurDay: {},
    error: {
        status: false,
        message: ''
    },
    loading: false,
    weatherFor5Days: {},
    showForecast: false,
    sendRequest: false
}

const currentTempSlice = createSlice({
    name: 'weatherForCurDay',
    initialState,
    reducers: {
        getCurrentTemp(state, action) {
            state.weatherForCurDay = { ...action.payload }
        },
        getLoadingState(state) {
            state.loading = !state.loading
        },
        getErrorState(state, action) {
            state.error = {
                status: action.payload.status,
                message: action.payload.message
            }
        },
        getTempFor5Days(state, action) {
            state.weatherFor5Days = { ...action.payload }
        },
        getForecast(state) {
            state.showForecast = !state.showForecast
        },
        getSendRequest(state, action) {
            state.sendRequest = action.payload
        }

    }
})

export const currentTempSliceActions = currentTempSlice.actions

export default currentTempSlice
