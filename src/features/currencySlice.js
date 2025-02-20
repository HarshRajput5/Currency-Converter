import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        fromCurrency : "usd",
        toCurrency : "inr",
        fromAmount: 1,
        toAmount: 0,
    },
    reducers : {
        setFromCurrency: (state,action)=>{
            state.fromCurrency = action.payload
        },
        setToCurrency: (state,action)=>{
            state.toCurrency = action.payload
        },
        setFromAmount: (state,action)=>{
            state.fromAmount = action.payload
        },
        setToAmount: (state,action)=>{
            state.toAmount = action.payload
        }
    }
});

export const {setFromCurrency, setToCurrency, setFromAmount, setToAmount} = currencySlice.actions;

export default currencySlice.reducer;