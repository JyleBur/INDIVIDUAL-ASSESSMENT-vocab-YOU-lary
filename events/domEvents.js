import {
  getVocab, deleteVocab, filterVocab, getSingleVocab
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // When create entry button it will call the addVocabForm for the user to create a vocab term
    if (e.target.id.includes('create-entry')) {
      addVocabForm();
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EDIT VOCAB WORD EVENT LISTENER
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
      getSingleVocab(firebaseKey).then(addVocabForm);
    }

    // DELETE VOCAB WORD EVENT LISTENER
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this word?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
  });

  // FILTER BUTTONS TO FILTER VOCAB WORDS
  document.querySelector('#filter').addEventListener('click', (e) => {
    if (e.target.id.includes('all-btn')) {
      getVocab(user.uid).then(showVocab);
    }
    if (e.target.id.includes('javascript-btn')) {
      filterVocab(user.uid, 'Javascript').then(showVocab);
    }
    if (e.target.id.includes('html-btn')) {
      filterVocab(user.uid, 'HTML').then(showVocab);
    }
    if (e.target.id.includes('css-btn')) {
      filterVocab(user.uid, 'CSS').then(showVocab);
    }
  });
};
export default domEvents;
