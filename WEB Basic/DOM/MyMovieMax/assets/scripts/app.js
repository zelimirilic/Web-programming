const addMovieModalElement = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdropElement = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModalElement.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userIputs = document.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const startDeleteMovieHendler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toogleBackdrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger')

    //confirmDeletionBtn.removeEventListener('click', deleteMovieHandler);
    cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);
    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener(
        'click',
        deleteMovieHandler.bind(null, movieId)
    );
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};

const closeMovieDeletionModal = () => {
    toogleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating} / 10.00 IMDb stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHendler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const toogleBackdrop = () => {
    backdropElement.classList.toggle('visible');
}

const closeMovieModal = () => {
    addMovieModalElement.classList.remove('visible');
   
}

const showMovieModal = () => {
    addMovieModalElement.classList.add('visible');
    toogleBackdrop();
};

const cancelAddMovieHandler = () => {
    showMovieModal();
    toogleBackdrop();
    clearMovieInputs();
};


const clearMovieInputs = () => {
    for (const usrIn of userIputs) {
        usrIn.value = '';
    }
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
};

const confirmAddMovieHandler = () => {
    const titleValue = userIputs[0].value;
    const imageUrl = userIputs[1].value;
    const ratingValue = userIputs[2].value;

    if (titleValue.trim() === '' || imageUrl.trim() === '' || ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 10) {
        alert('Enter a valid values (rating between 1 and 10).');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrl,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toogleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();

}


startAddMovieButton.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', confirmAddMovieHandler);