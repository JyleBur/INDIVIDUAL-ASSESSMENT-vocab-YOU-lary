// eslint-disable-next-line quotes
import { updateVocab, createVocab, getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('input[name="optradio"]:checked').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('input[name="optradio"]:checked').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        firebaseKey
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;

// title: document.querySelector('#title').value,
// category: document.querySelector('#category').value,
// definition: document.querySelector('#definition').value,
// uid: user.id,
