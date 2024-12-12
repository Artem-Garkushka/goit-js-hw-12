import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more'); 

let query = '';
let page = 1;
const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  query = form.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ title: 'Помилка', message: 'Будь ласка, введіть запит для пошуку!' });
    loadMoreButton.classList.add('is-hidden');
    return;
  }

  page = 1;
  clearGallery(gallery);
  toggleLoader(true);
  loadImages();
});

function loadImages() {
  fetchImages(query, page)
    .then(function (response) {
      toggleLoader(false);
      if (response.hits.length === 0) {
        iziToast.warning({ title: 'Результати відсутні', message: 'Вибачте, зображень не знайдено!' });
        loadMoreButton.classList.add('is-hidden');
        return;
      }
      renderImages(response.hits, gallery);
      lightbox.refresh();
      toggleLoadMoreButton(response.totalHits > page * 15);
    })
    .catch(function (error) {
      iziToast.error({ title: 'Помилка', message: error.message });
      toggleLoader(false);
      toggleLoadMoreButton(false);
    });
}

loadMoreButton.addEventListener('click', function () {
  page += 1;
  toggleLoader(true);
  loadImages();
  scrollToNextImages();
});

function toggleLoader(isVisible) {
  loader.classList.toggle('is-hidden', !isVisible);
}

function toggleLoadMoreButton(isVisible) {
  loadMoreButton.classList.toggle('is-hidden', !isVisible);
}

function scrollToNextImages() {
  const galleryItems = document.querySelectorAll('.gallery__item');
  const cardHeight = galleryItems[0].getBoundingClientRect().height;
  window.scrollBy(0, cardHeight * 2);
}
