import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authorizationAPI} from "../../api/authAPI";


export const authorization = createAsyncThunk(
    'main/authorization',
    async(payload) => {
        const {username, password} = payload
        const {data} = await authorizationAPI(username, password)
        return data
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        authError: '',
    },
    reducers: {
        checkAuth(state){
            const token = localStorage.getItem('token')
            if (!token) return;
            state.isAuth = true
        },
        resetAuthError(state){
            state.authError = ''
        },
        logout(state){
            localStorage.removeItem('token')
            state.isAuth = false
        }
    },
    extraReducers: builder => {
        builder.addCase(authorization.fulfilled, (state, action) => {
            const data = action.payload

            if (!data) {
                state.authError = 'Ошибка авторизации'
            } else {
                localStorage.setItem('token', data['token'])
                state.authError = ''
                state.isAuth = true
            }
        })
    }
})

export const {
    resetAuthError,
    checkAuth,
    logout
} = authSlice.actions
export default authSlice.reducer