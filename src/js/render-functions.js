export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}

export function renderImages(images, galleryElement) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery__item">
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <ul>
              <li><h3>Likes</h3> <p>${likes}</p></li>
              <li><h3>Views</h3> <p>${views}</p></li>
              <li><h3>Comments</h3> <p>${comments}</p></li>
              <li><h3>Downloads</h3> <p>${downloads}</p></li>
            </ul>
          </div>
        </div>
      </a>
    `
    )
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);

  if (images.length > 0) {
    setTimeout(() => {
      const lastImage = galleryElement.lastElementChild;
      lastImage.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 300);
  }
}
