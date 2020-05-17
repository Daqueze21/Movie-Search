export default class MoviesResponse {
  constructor() {
    this.apiUrl = 'https://www.omdbapi.com/?s=';
    this.apiKey = '8180341d';
  }

  async getMovies(searchTerm, pageNumber) {
    const moviesResponse = await fetch(
      `${this.apiUrl}${searchTerm}&page=${pageNumber}&apikey=${this.apiKey}`
    );
    const movies = await moviesResponse.json();
    return movies.Search
  }
}
