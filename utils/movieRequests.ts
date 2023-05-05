const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchDiscoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  fetchMainMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchLatestMovie: `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;