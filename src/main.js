import './js/pixabay-api.js';
import './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages, GALLERY_LINK } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const galleryContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderContainer = document.querySelector('.loader');

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const queryInput = event.target.elements.query.value;

  if (queryInput === '') {
    return;
  }

  try {
    const { hits } = await fetchImages(queryInput);

    if (hits.length > 0) {
      const galleryHTML = hits.map(createGallery).join('');
      galleryContainer.innerHTML = galleryHTML;

      const lightbox = new SimpleLightbox(`.${GALLERY_LINK}`);
      lightbox.refresh();
    } else {
      galleryContainer.innerHTML =
        '<p class="no-results-message">No images found.</p>';
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    searchForm.reset();
    loaderContainer.style.display = 'none';
  }
});
