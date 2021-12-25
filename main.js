const MOVIE_API_KEY = `be6cd93a405d3297ac97112cfad979b4`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?`;

const IMAGE_URL = `https://image.tmdb.org/t/p/w1080`;

let mostPopularDocument = document.querySelector(".most-popular");
let movieContainer = document.querySelector(".movie-container");
let modalContainer = document.querySelector(".modal-container");
let close = document.querySelector(".close");
let movieTitle = document.querySelector(".movie-title");
let movieDetail = document.querySelector(".movie-detail");



movieContainer.addEventListener("click", (event) => {

    if (event.target.classList[0] == "movie-image") {
        let title = event.target.parentElement.children[2].children[0].innerText
        let overview = event.target.parentElement.children[0].value;
        movieTitle.innerHTML = title;
        movieDetail.innerHTML = overview;
        modalContainer.classList = "modal-container show";
    }

})

modalContainer.addEventListener("click", (event) => {

    if (event.target.classList[0] == "modal-container") {
        modalContainer.classList = "modal-container hide";
    }
})

close.addEventListener("click", () => {
    modalContainer.classList = "modal-container hide";
})


const biuldTheDom = (movies) => {

    mostPopularDocument.innerHTML = "";

    movies.forEach(movie => {

        mostPopularDocument.innerHTML += `<div class="movie">
        <input type="hidden" value="${movie.overview}">
        <img class="movie-image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
       <div class="info">
        <span class="movie-title">${movie.original_title}</span>
        
           <div class="counts">
            <div class="vote-average">
                <span>${movie.vote_average}</span>
            </div>
            <div class="release-date">
                <span>${movie.release_date}</span>
            </div>
           
           </div>
        </div>
    </div>`

    })

}

const getMostPopularMoviews = async () => {

    const request = await fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1`);

    const { results } = await request.json();

    biuldTheDom(results);
}

getMostPopularMoviews();