import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../api/api";

// Azione asincrona per recuperare le notizie
export const getNews = createAsyncThunk("news/getNews", async () => {
  return await fetchNews();
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
