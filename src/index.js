import MovieCard from './modules/movieCard';
import MoviesResponse from './modules/moviesResponse';
import OmdbRating from './modules/omdbRating';
// import { getKeyboard } from './modules/keyboard';
import './scss/index.scss'; // scss

const input = document.querySelector('#searchInput');
const form = document.querySelector('form');
const resultsSection = document.querySelector('#results');

form.addEventListener('submit', formSubmitted);
const clearInputBtn = document.querySelector('.clearInputBtn');
clearInputBtn.addEventListener('click', () => {
  input.value = '';
});

// function to get data from server
function formSubmitted(event) {
  event.preventDefault();

  const searchTerm = input.value;

  if (resultsSection.innerHTML !== '') {
    resultsSection.innerHTML = '';
  }
  // make response to server
  const movieResponse = new MoviesResponse();
  const responseResults = movieResponse.getMovies(searchTerm, 1);
  responseResults.then((data) => {
    if (!data) {
      showError();
    }
    showResults(data);
  });
}

// render data on page
function showResults(data) {
  data.forEach((element) => {
    const MovieratingObj = new OmdbRating();
    MovieratingObj.getMovieRating(element.imdbID).then((ratingData) => {
      const movieCard = new MovieCard(element, ratingData);
      movieCard.init();
    });
  });
}

// show error
function showError() {
  resultsSection.innerHTML = `
    <div class="alert alert-danger" role="alert">
        No results for ${input.value}
    </div>
    `;
}

// var swiper = new Swiper('.swiper-container');

// const keyboardBtn = document.querySelector('#keyboardBtn');
// console.log(keyboardBtn);

// keyboardBtn.addEventListener('click', showKeyboard);
// function showKeyboard () {
//   const keyboardElem = document.getElementById('keyboard');
//     keyboardElem.style.display === '' || keyboardElem.style.display === 'none'
//       ? (keyboardElem.style.display = 'flex')
//       : (keyboardElem.style.display = 'none');
//   ;
//   getKeyboard();
// };
