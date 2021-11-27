import teamTpl from '../templates/team-modal.hbs';
import teamList from '../team.json';
import refs from './refs';

function renderModalTeam() {
  const markup = teamTpl(teamList);
  refs.modalFooterEl.insertAdjacentHTML('beforeend', markup);
}

refs.teamBtn.addEventListener('click', onOpenModal);
renderModalTeam();

const modalTeamOverlay = document.querySelector('.team__overlay');
modalTeamOverlay.addEventListener('click', onOverlayClick);

function onOpenModal() {
  refs.modalFooterEl.classList.add('is-open');
  window.addEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.modalFooterEl.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPress);
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
