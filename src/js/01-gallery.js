import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const createCards = galleryItems.map(imageEl).join('');
//galleryEl.addEventListener("click", onClickCard);
function imageEl({ preview, original, description }) {
  return `
  <div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
            />
      </a>
 </div>
  `;
}
galleryEl.innerHTML = ('afterbegin', createCards);
//galleryEl.addEventListener(createCards);

console.log(galleryEl);
//Посмотри в документации секцию «Options» и добавь отображение подписей к
//изображениям из атрибута alt.Пусть подпись будет снизу и появляется
//через 250 миллисекунд после открытия изображения.
const moove = new SimpleLightbox('gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});
