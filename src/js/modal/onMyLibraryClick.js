import refs from '../Refs';
export function onMyLibraryClick() {
    bgImageChange('home-header', 'library-header');
};

function bgImageChange(oldBg, newBg) {
    localStorage.setItem('searched', '');
    refs.searchForm.query.value = '';
    if (refs.headerEl.classList.contains(oldBg)) {
        console.log('contains!');
        refs.headerEl.classList.remove(oldBg);
    }
    refs.headerEl.classList.add(newBg);
    refs.myLibraryBtn.classList.add('active');
    refs.myHomeBtn.classList.remove('active');
    refs.searchBox.classList.add('visually-hidden');
    refs.mainSection.classList.add('visually-hidden');
    refs.libraryMainSection.classList.remove('visually-hidden');
    refs.warningField.classList.add('visually-hidden');
    refs.buttonBox.classList.remove('visually-hidden');
}