import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galaryListRef = document.querySelector('.gallery');

const markup = galleryItems
  .map(img => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`;
  })
  .join('');

galaryListRef.innerHTML = markup;

galaryListRef.addEventListener('click', handleOpenModal);

function handleOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}

new SimpleLightbox('.gallery__item a', {});
