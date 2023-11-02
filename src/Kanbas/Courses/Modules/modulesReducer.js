import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    modules: db.modules,
    module: { name: "New Module 123", description: "New Description" },
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
                state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map(m =>
                m._id === action.payload._id ? action.payload : m);
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});
export const { addModule, deleteModule,
updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;