const { galleryItems } = require('./gallery-items');

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');

const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

gallery.insertAdjacentHTML('afterbegin', makeGallery);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// Change code below this line
console.log(galleryItems);
