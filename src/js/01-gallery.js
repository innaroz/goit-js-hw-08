import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapper = document.querySelector('.gallery');

const galleryItemTemplate = (item) => `
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>
`;

galleryItems.forEach((item) => galleryWrapper.insertAdjacentHTML('beforeend', galleryItemTemplate(item)));

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captions: true, captionDelay: 250 });
