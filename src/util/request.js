const APIKEY = "6b0d9c146a3b5bf12f75cd30e982e978";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_generes=99`,
};

export default requests;
