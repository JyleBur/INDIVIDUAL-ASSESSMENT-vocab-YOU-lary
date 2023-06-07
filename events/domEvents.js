import addVocabForm from '../components/forms/addVocabForm';

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry')) {
      addVocabForm();
    }
  });
};
export default domEvents;
