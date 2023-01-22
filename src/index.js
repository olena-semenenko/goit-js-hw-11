//import plagins
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

//elements
//searchForm from submit
const searchForm = document.querySelector('#search-form');
//searchInput from value for fetch
const searchInput = document.querySelector('#search-form input');
//loadMoreButton
const loadMoreButton = document.querySelector('.load-more');
loadMoreButton.style.display = 'none';

//gallery from image markup
const gallery = document.querySelector('.gallery');

//options for notiflix
const options = {
  width: '500px',
  borderRadius: '30px',
  position: 'center-bottom',
  distance: '25px',
  fontSize: '30px',
  timeout: 2000,
};

//SimplerLigthBox
const lightbox = new SimpleLightbox('.gallery .gallery-item');

//variables
//default page for pagination
let lastQuery = null;
let page = 1;
let totalPages = 0;

//eventlistener for submit
searchForm.addEventListener('submit', onSearchSubmit);

//eventListener Function
function onSearchSubmit(event) {
  event.preventDefault();
  clearMarkup();

  let query = searchInput.value;
  lastQuery = query;
  //fetch
  if (query) {
    fetchImg(query, page).then(data => {
      createGalleryMarkup(data);
    });
  } else {
    Notify.warning('Enter the search value', options);
  }
}

loadMoreButton.addEventListener('click', onLoadBtn);
//eventListener Function
async function onLoadBtn() {
  page += 1;
  console.log(page);
  console.log(totalPages);
  if (page > totalPages) {
    Notify.success(`We're sorry, but you've reached the end of search results."`, options);
    loadMoreButton.style.display = 'none';
    return;
  } else
    await fetchImg(lastQuery, page).then(data => {
      createGalleryMarkup(data);
      loadMoreButton.style.display = 'flex';
    });
}

// fetch function
async function fetchImg(query, page) {
  const params = {
    key: '32876291-7c3f3822b4f7ee95c74cc0c31',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };

  //GET
  try {
    const response = await axios.get('https://pixabay.com/api/', { params });
    console.log(response);
    //control response
    if (response) {
      const totalHits = response.data.totalHits;
      // Calculate total number of pages of search results
      totalPages = Math.ceil(totalHits / 40);
      if (totalHits === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
          options
        );
      } else Notify.success(`Hooray! We found ${totalHits} images.`, options);
    }
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}

//clear Gallery
function clearMarkup() {
  gallery.innerHTML = '';
}

//create markop Gallery
function createGalleryMarkup(data) {
  data.forEach(image => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
    gallery.innerHTML += `
    <a class= "gallery-item" href="${largeImageURL}">
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>
</a>
    `;
  });
  lightbox.refresh();
  if (page === 1 && totalPages !== 0) {
    loadMoreButton.style.display = 'flex';
  } else {
    loadMoreButton.style.display = 'none';
  }
}

// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });
