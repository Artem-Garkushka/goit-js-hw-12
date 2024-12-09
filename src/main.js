import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

let currentPage = 1;
let currentQuery = '';

const searchForm = document.querySelector('.form-js');
const loadMoreButton = document.querySelector('.load-more'); // Додайте цю кнопку у ваш HTML
const galleryList = document.querySelector('.gallery-list');

const handleSubmit = async (event) => {
  event.preventDefault();
  currentQuery = event.target.elements.picture.value;
  currentPage = 1;
  const data = await fetchImages(currentQuery, currentPage);
  renderGallery(data.hits);
  loadMoreButton.classList.add('is-hidden');
  if (data.totalHits > 15) {
    loadMoreButton.classList.remove('is-hidden');
  }
  scrollToNewImages();
};

const handleLoadMore = async () => {
  currentPage += 1;
  const data = await fetchImages(currentQuery, currentPage);
  renderGallery(data.hits, true);
  if (currentPage * 15 >= data.totalHits) {
    loadMoreButton.classList.add('is-hidden');
    alert("We're sorry, but you've reached the end of search results.");
  }
  scrollToNewImages();
};

const scrollToNewImages = () => {
  const { height: cardHeight } = galleryList.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

searchForm.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleLoadMore);
