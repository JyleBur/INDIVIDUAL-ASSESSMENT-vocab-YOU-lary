import { getVocab, deleteVocab, filterVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry')) {
      addVocabForm();
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this word?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
  });

  document.querySelector('#filter').addEventListener('click', (e) => {
    if (e.target.id.includes('math-btn')) {
      filterVocab(user.uid, 'Math').then(showVocab);
    }
  });
  document.querySelector('#filter').addEventListener('click', (e) => {
    if (e.target.id.includes('science-btn')) {
      filterVocab(user.uid, 'Science').then(showVocab);
    }
  });
  document.querySelector('#filter').addEventListener('click', (e) => {
    if (e.target.id.includes('socialstudies-btn')) {
      filterVocab(user.uid, 'Social Studies').then(showVocab);
    }
  });
  document.querySelector('#filter').addEventListener('click', (e) => {
    if (e.target.id.includes('english-btn')) {
      filterVocab(user.uid, 'English').then(showVocab);
    }
  });
};
export default domEvents;
