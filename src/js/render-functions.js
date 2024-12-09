const galleryList = document.querySelector('.gallery-list');

export const renderGallery = (images, append = false) => {
  const markup = images.map(image => `
    <li class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
    </li>
  `).join('');
  if (append) {
    galleryList.insertAdjacentHTML('beforeend', markup);
  } else {
    galleryList.innerHTML = markup;
  }
};
