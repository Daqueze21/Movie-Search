!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);class r{constructor(e,t){this.cardInner=`\n        <img src="${e.Poster}" class="card-img-top pt-2" alt="${e.Title}">\n        <div class="card-body p-2 d-flex flex-column justify-content-between">\n          <h6">\n            <a class="d-flex justify-content-center" href="https://www.imdb.com/title/${e.imdbID}/">${e.Title}</a>\n          </h6">\n          <p class="d-flex justify-content-center mt-2">\n              ${e.Year}\n            </p>\n          <div class="row justify-content-center">\n            <svg class="bi bi-star mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n              <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clip-rule="evenodd"/>\n              </svg>\n            <p class="card-text">\n              ${t}\n            </p>\n          </div>\n        </div>\n    `,this.buttonHTML=null}renderElement(e,t,n,r,i,o){const c=document.createElement(t);return r&&(c.id=r),i&&(c.innerHTML=i),n&&(c.className=n),o&&(c.src=o),e.appendChild(c),c}render(){const e=document.querySelector("#results");this.buttonHTML=this.renderElement(e,"div","card col-3 mr-2 mb-2 swiper-slide",null,this.cardInner)}init(){this.render()}}class i{constructor(){this.apiUrl="https://www.omdbapi.com/?s=",this.apiKey="8180341d"}async getMovies(e,t){const n=await fetch(`${this.apiUrl}${e}&page=${t}&apikey=${this.apiKey}`);return(await n.json()).Search}}class o{constructor(){this.Url="https://www.omdbapi.com/?i=",this.Key="8180341d"}async getMovieRating(e){const t=await fetch(`${this.Url}${e}&apikey=${this.Key}`);return(await t.json()).imdbRating}}n(0);const c=document.querySelector("#searchInput"),l=document.querySelector("form"),s=document.querySelector("#results");l.addEventListener("submit",(function(e){e.preventDefault();const t=c.value;""!==s.innerHTML&&(s.innerHTML="");(new i).getMovies(t,1).then(e=>{e||(s.innerHTML=`\n    <div class="alert alert-danger" role="alert">\n        No results for ${c.value}\n    </div>\n    `),function(e){e.forEach(e=>{(new o).getMovieRating(e.imdbID).then(t=>{new r(e,t).init()})})}(e)})})),document.querySelector(".clearInputBtn").addEventListener("click",()=>{c.value=""})}]);