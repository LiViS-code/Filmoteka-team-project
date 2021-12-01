import { teamBtn } from './refs';

import * as basicLightbox from 'basiclightbox';
import Vasily from '../images/team/Vasily.png';
import Vadim from '../images/team/Vadim.png';
import Anastasia from '../images/team/Anastasia.png';
import Nadiia from '../images/team/Nadiia.jpg';
import Rodion from '../images/team/Rodion.jpg';
import Luka from '../images/team/Luka.png';
import Serhii from '../images/team/Serhii.png';
import Dmytro from '../images/team/Dmytro.png';

const markup = `
<h2 class="team-title">Наша команда</h2>
<ul class="team-list">
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/LiViS-code" target="_blank">
      <img src="${Vasily}" alt="Vasily" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Vasily Lopatkin</h3>
    <p class="team-role">Team Lead</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/VadymDenysiuk" target="_blank">
      <img src="${Vadim}" alt="Vadym" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Vadym Denysiuk</h3>
    <p class="team-role">Scrum Master</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/ms-anastasia" target="_blank">
      <img src="${Anastasia}" alt="Anastasia" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Anastasia Korniichuk</h3>
    <p class="team-role">Developer</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/Nadiia-Myronenko" target="_blank">
      <img src="${Nadiia}" alt="Nadiia" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Nadiia Myronenko</h3>
    <p class="team-role">Developer</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/rodion-prokopchenko" target="_blank">
      <img src="${Rodion}" alt="Rodion" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Rodion Prokopchenko</h3>
    <p class="team-role">Developer</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/Lukka777" target="_blank">
      <img src="${Luka}" alt="Luka" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Luka Gavrysh</h3>
    <p class="team-role">Developer</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/smaltsev-v" target="_blank">
      <img src="${Serhii}" alt="Serhii" width="160" height="180" class="team-image" />
    </a>
    <h3 class="team-name">Serhii Maltsev</h3>
    <p class="team-role">Developer</p>
  </li>
  <li class="team-card">
    <a class="team-item__link" href="https://github.com/DmytroPundyk" target="_blank">
      <img src="${Dmytro}" alt="Dmytro" width="150" height="150" class="team-image" />
    </a>
    <h3 class="team-name">Dmytro Pundyk</h3>
    <p class="team-role">Developer</p>
  </li>
</ul>`;

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
