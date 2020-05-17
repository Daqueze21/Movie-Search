export default class OmdbRating {
  constructor() {
    this.Url = 'https://www.omdbapi.com/?i=';
    this.Key = '8180341d';
  }

  async getMovieRating(imdbID) {
    const movieRatingResponse = await fetch(
      `${this.Url}${imdbID}&apikey=${this.Key}`
    );
    const movieRating = await movieRatingResponse.json();
    // console.log("mr", movieRating);
    return movieRating.imdbRating;
  }
}
