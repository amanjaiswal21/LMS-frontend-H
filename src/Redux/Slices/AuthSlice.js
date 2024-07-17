import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance.js";

const parseJSON = (value) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return {};
  }
};

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || "",
  data: localStorage.getItem('data') ? parseJSON(localStorage.getItem('data')) : {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res =  axiosInstance.post("user/register", data);
    toast.promise(res, {
      loading: "Wait! Creating your account...", // Fixed typo and improved message
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create your account"
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("user/login", data);
    toast.promise(res, {
      loading: "Wait! Authentication in progress...", // Improved message
      success: (data) => {
        return data?.data?.message || "User logged in successfully"; // Default success message
      },
      error: "Failed to login"
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.post("user/logout"); // Ensure using post method
    toast.promise(res, {
      loading: "Wait! Logout in progress...", // Improved message
      success: (data) => {
        return data?.data?.message || "User logged out successfully"; // Default success message
      },
      error: "Failed to logout"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const updateProfile = createAsyncThunk("/user/update/profile", async ({ id, data }) => {
  try {
    const res = axiosInstance.put(`user/update/${id}`,data); 
    toast.promise(res, {
      loading: "Wait! profile update in progress...", 
      success: (data) => {
        return data?.data?.message || "User profile updated successfully"; 
      },
      error: "Failed to update profile"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
    const res = axiosInstance.get("user/me"); 
    return (await res).data;
  } catch (error) {
    toast.error(error?.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user)); 
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role); 
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user)); // Store user data in local storage
        localStorage.setItem("isLoggedIn", true); // Set isLoggedIn flag in local storage
        localStorage.setItem("role", action?.payload?.user?.role); // Store user role in local storage
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if(!action?.payload?.user) return;
        localStorage.setItem("data", JSON.stringify(action?.payload?.user)); // Store user data in local storage
        localStorage.setItem("isLoggedIn", true); // Set isLoggedIn flag in local storage
        localStorage.setItem("role", action?.payload?.user?.role); // Store user role in local storage
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
  }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
