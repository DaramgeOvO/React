import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmMyYjcyZjllYzRiYjRhNTI0ZDY0YmNkYzhjNWZhOCIsIm5iZiI6MTcyMTg4NDIyMC43NDEwNTMsInN1YiI6IjY2YTFjYzdjYTkyMTI3NzZjNWUwZjgzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v-24o5gd_iowUA7-KhvHU72Xgzo319ciy9CsFv7GhE",
  },
};

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    headers
  );
}
