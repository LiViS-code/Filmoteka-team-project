import { modalContainer, bodyDoc } from '../refs';

export function toggleModal() {
  modalContainer.classList.toggle('visually-hidden');
  if (modalContainer.classList.contains('visually-hidden')) return toggleScrollonBody('', '');
  toggleScrollonBody('hidden', '17px');
}

export function toggleScrollonBody(overfow, marginRight) {
  bodyDoc.style.overflow = overfow;
  bodyDoc.style.marginRight = marginRight;
}
