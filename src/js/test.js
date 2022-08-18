import { galleryItems } from './gallery-items';

const refs = {
  galleryList: document.querySelector('.gallery-list'),
  modalImg: document.querySelector('.modal-img'),
  backdrop: document.querySelector('.modal')
};
refs.galleryList.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

refs.galleryList.addEventListener('click',onGalleryListClick)

function onGalleryListClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    console.log(evt.target)
    return;
  }
  const srcOriginalImg = evt.target.dataset.source
  const altOriginalImg = evt.target.getAttribute('alt')

onModalOpen(evt.target, srcOriginalImg, altOriginalImg)


  console.log(srcOriginalImg,altOriginalImg)
}


function onModalOpen(src, alt) {
  refs.backdrop.classList.remove('is-hidden')
  refs.modalImg.src = src;
  refs.modalImg.alt = alt;
}









function createGalleryItems(galleryItems){
  return galleryItems.map(({preview,original,description}) => `
  <li class'gallery-item'>
  <a class = 'gallery-link'href="${original}">
  <img class="gallery-img"
        src="${preview}"
        data-source='${original}'
        alt="${description}"
        />
        </a>
  </li>
`).join('');
}