
   
// export default class Spinner {
//   constructor() {
//     this.square = document.querySelector('.square');
//   }
//   hideSpinner() {
//     this.square.classList.add('is-hidden');
//   }
//   showSpinner() {
//     this.square.classList.remove('is-hidden');
//   }
// }

   
import * as basicLightbox from 'basiclightbox';

const markup = `<div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>`;

const spinner = basicLightbox.create(markup);

export default { spinner };