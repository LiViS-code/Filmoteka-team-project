import { modalContainer, bodyDoc } from '../refs';

export function toggleModal() {
  modalContainer.classList.toggle('visually-hidden');
  if (modalContainer.classList.contains('visually-hidden')) return (bodyDoc.style.overflow = '');
  bodyDoc.style.overflow = 'hidden';
}
