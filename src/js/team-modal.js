
import { teamBtn } from './refs';

import * as basicLightbox from 'basiclightbox';
import Vasily from '../images/team/Vasily.png';
import Vadim from '../images/team/Vadim.png';
import Anastasia from '../images/team/Anastasia.png';
import Nadiia from '../images/team/Nadiia.jpg';
import Rodion from '../images/team/photo1.jpg';
import Luka from '../images/team/photo1.jpg';
import Serhii from '../images/team/Serhii.png';
import Dmytro from '../images/team/Dmytro.png';

const markup = `<div class="team"><div class="team-card">
     <a class="team-item__link" href="https://github.com/LiViS-code" target="_blank">
     <img src="${Vasily}" alt="Vasily" width="160" height="180" class="team-image">
       </a>
    <p class="team-name">Vasily</p>
    <p class="team-name">Lopatkin</p>
    <p class="team-role">Team Lead</p>
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/VadymDenysiuk" target="_blank">
    <img src="${Vadim}" alt="Vadym" width="160" height="180" class="team-image">
    </a>
    <p class="team-name">Vadym</p>
    <p class="team-name">Denysiuk</p>
    <p class="team-role">Scrum Master</p>
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/ms-anastasia" target="_blank">
    <img src="${Anastasia}" alt="Anastasia" width="160" height="180" class="team-image">
    <a/>
    <p class="team-name">Anastasia</p>
    <p class="team-name">Korniichuk</p>
    <p class="team-role">Developer</p>
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/Nadiia-Myronenko" target="_blank">
    <img src="${Nadiia}" alt="Nadiia" width="160" height="180" class="team-image">
    </a>
    <p class="team-name">Nadiia</p>
    <p class="team-name">Myronenko</p>
    <p class="team-role">Developer</p>
    
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/rodion-prokopchenko" target="_blank">
    <img src="${Rodion}" alt="Rodion" width="160" height="180" class="team-image">
    </a>
    <p class="team-name">Rodion</p>
    <p class="team-name">Prokopchenko</p>
    <p class="team-role">Developer</p>
    
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/Lukka777" target="_blank">
    <img src="${Luka}" alt="Luka" width="160" height="180" class="team-image">
    </a>
    <p class="team-name">Luka</p>
    <p class="team-name">Luka777</p>
    <p class="team-role">Developer</p>
   
</div>
<div class="team-card">
<a class="team-item__link" href="https://github.com/smaltsev-v" target="_blank">
    <img src="${Serhii}" alt="Serhii" width="160" height="180" class="team-image">
    </a>
    <p class="team-name">Serhii</p>
    <p class="team-name">Maltsev</p>
    <p class="team-role">Developer</p>
   
</div>
<div class="team-card">
 <a class="team-item__link" href="https://github.com/DmytroPundyk" target="_blank">
    <img src="${Dmytro}" alt="Dmytro" width="150" height="150" class="team-image">
     </a>
    <p class="team-name">Dmytro</p>
    <p class="team-name">Pundyk</p>
    <p class="team-role">Developer</p>
   
</div></div>`;

teamBtn.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}