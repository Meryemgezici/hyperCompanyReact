import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getMenu=createAsyncThunk("getMenu",async()=>{
    const res=await axios.get("http://localhost:3030/menu");

    return res.data;
});