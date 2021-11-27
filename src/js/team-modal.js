import teamTpl from '../templates/team-modal.hbs';
import teamList from '../team.json';
import { modalFooterEl, teamBtn } from './refs';

function renderModalTeam() {
  const markup = teamTpl(teamList);
  modalFooterEl.insertAdjacentHTML('beforeend', markup);
}

teamBtn.addEventListener('click', onOpenModal);
renderModalTeam();

const modalTeamOverlay = document.querySelector('.team__overlay');
modalTeamOverlay.addEventListener('click', onOverlayClick);

function onOpenModal() {
  modalFooterEl.classList.add('is-open');
  window.addEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  modalFooterEl.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPress);
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
