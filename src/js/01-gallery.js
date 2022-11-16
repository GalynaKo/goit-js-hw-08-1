// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('div');

//Реализация делегирования на div.gallery и получение url большого изображения.
galleryEl.addEventListener('click', onClickCard);

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const createCards = galleryItems.map(cardEl).join('');
function cardEl({ preview, original, description }) {
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
 </div>`;
}
galleryEl.insertAdjacentHTML('afterbegin', createCards);
//console.log(createCards);
//console.log(galleryEl);
console.log(galleryItems);

function onClickCard(e) {
  e.preventDefault();
  const tach = e.target.nodeName;
  //if filtro della meta del tach click
  if (tach !== 'IMG') {
    return;
  }
  //console.log(e.target.dataset.img);

  //Подключение скрипта и стилей библиотеки модального окна basicLightbox.
  const instance = basicLightbox.create(
    `
          <div class="modal">
             <img
                 class="modal__image"
                  src="${e.target.dataset.source}"
                />
          </div> `,
    {
      //Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
        instance.element().querySelector('img').onclick = instance.close;
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  //Добавь закрытие модального окна по нажатию клавиши Escape.
  //Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.У библиотеки basicLightbox есть метод для программного закрытия модального окна.//
  function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
