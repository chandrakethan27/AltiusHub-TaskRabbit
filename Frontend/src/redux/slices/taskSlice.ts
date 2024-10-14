import { createSlice } from "@reduxjs/toolkit";


export 

const initialState = {
    tasks: []
}


const taskSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    
  });
  
  export default taskSlice.reducer;