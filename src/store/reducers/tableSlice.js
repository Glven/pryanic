import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addRowAPI, delRowAPI, editRowAPI, fetchTableAPI} from "../../api/tableAPI";

export const fetchTable = createAsyncThunk(
    'table/fetch',
    async(payload, thunkApi) => {
        try {
            const {data} = await fetchTableAPI()
            return data
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const addRow = createAsyncThunk(
    'table/addRow',
    async(payload, thunkApi) => {
        try {
            const rowData = payload
            await addRowAPI(rowData)
            await thunkApi.dispatch(fetchTable())
            await thunkApi.dispatch(changeFormVisible(false))
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const editRow = createAsyncThunk(
    'table/editRow',
    async(payload, thunkApi) => {
        try {
            const {id, rowData} = payload
            await editRowAPI(id, rowData)
            await thunkApi.dispatch(fetchTable())
            await thunkApi.dispatch(changeFormVisible(false))
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const delRow = createAsyncThunk(
    'table/delRow',
    async(payload, thunkApi) => {
        try {
            const id = payload
            await delRowAPI(id)
            await thunkApi.dispatch(fetchTable())
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

const tableSlice = createSlice({
    name: 'table',
    initialState: {
        table: [],
        currentRow: null,
        formVisible: false,
        status: '',
    },
    reducers: {
        getCurrentRow(state, action){
            state.currentRow = state.table.find(r => r.id === action.payload)
        },
        changeFormVisible(state, action) {
            state.formVisible = action.payload
        },
        resetTable(state){
            state.table = []
        },
        resetStatus(state){
            state.status = ''
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchTable.pending, state=> {
            state.status = 'loading'
        })

        builder.addCase(fetchTable.fulfilled, (state, action) => {
            const {data} = action.payload
            state.table = data
            state.status = 'done'
        })

        builder.addCase(fetchTable.rejected, (state, action) => {
            alert(`Произошла ошибка\n${action.payload}`)
            state.status = 'error'
        })

        builder.addCase(addRow.rejected, (state, action) => {
            alert(`Произошла ошибка\n${action.payload}`)
            state.status = 'error'
        })

        builder.addCase(editRow.fulfilled, state => {
            state.currentRow = null
        })

        builder.addCase(editRow.rejected, (state, action) => {
            alert(`Произошла ошибка\n${action.payload}`)
            state.status = 'error'
        })

        builder.addCase(delRow.rejected, (state, action) => {
            alert(`Произошла ошибка\n${action.payload}`)
            state.status = 'error'
        })
    }
})

export const {
    getCurrentRow,
    changeFormVisible,
    resetTable,
    resetStatus
} = tableSlice.actions
export default tableSlice.reducer