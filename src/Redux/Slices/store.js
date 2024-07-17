import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./AuthSlice";
import courseSliceReducer from "./courseSlice";
import razorpaySliceReducer from "./RazorpaySlice";
import lectureSliceReducer from "./LectureSlice"
import statSliceReducer from "./StatSlice"

const store = configureStore({
    reducer:{
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: razorpaySliceReducer,
        lecture: lectureSliceReducer,
        stat: statSliceReducer
    },
    devTools:true,
})

export default store;