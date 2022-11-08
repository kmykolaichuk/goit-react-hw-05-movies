import axios from 'axios';

export async function FetchTrendingMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=2fdfddfa3e227dca651ac19b188fea2c'
  );
  return response.data.results;
}

export async function SearchMovies(query) {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=2fdfddfa3e227dca651ac19b188fea2c&language=en-US&page=1`
  );
  return search.data.results;
}

export async function MovieDetails(id) {
  const details = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2fdfddfa3e227dca651ac19b188fea2c&language=en-US`
  );
  return details.data;
}

export async function MovieCredits(id) {
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2fdfddfa3e227dca651ac19b188fea2c&language=en-US`
  );
  return credits.data.cast;
}

export async function MovieReview(id) {
  const review = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2fdfddfa3e227dca651ac19b188fea2c`
  );
  return review.data.results;
}
