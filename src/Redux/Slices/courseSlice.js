import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
    courseData: []
}

export const getAllCourses=createAsyncThunk("/course/get",async()=>{
    try {
        const response=axiosInstance.get("/courses");
        toast.promise(response,{
            loading:"loadin course data...",
            success:"Courses loaded successfully",
            error:"Failed to get courses"
        })
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
// Define the course slice
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
      
    }
});

// Export the reducer to be used in the store
export default courseSlice.reducer;
