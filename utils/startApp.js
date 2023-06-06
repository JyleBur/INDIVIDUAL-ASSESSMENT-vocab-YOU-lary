import getVocab from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocab from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  getVocab(user.uid).then((vocab) => showVocab(vocab));
  console.warn(getVocab(user.uid));
};

export default startApp;
