import axios from "axios";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";

export const fetchNews = async (section = "home") => {
  try {
    const response = await axios.get(`${BASE_URL}${section}.json?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

