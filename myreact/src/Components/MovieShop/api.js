import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmMyYjcyZjllYzRiYjRhNTI0ZDY0YmNkYzhjNWZhOCIsIm5iZiI6MTcyMTg4NDIyMC43NDEwNTMsInN1YiI6IjY2YTFjYzdjYTkyMTI3NzZjNWUwZjgzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v-24o5gd_iowUA7-KhvHU72Xgzo319ciy9CsFv7GhE",
  },
};

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    headers
  );
}

export function getMoviesPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers
  );
}

export function getMoviesTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers
  );
}

export function getMoviesUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    headers
  );
}

export const genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export function getGenre(list) {
  let str = "";
  list.forEach((a) => {
    const temp = genre.find((g) => g.id == a);
    str = str + ", " + temp.name;
  });
  return str;
}
