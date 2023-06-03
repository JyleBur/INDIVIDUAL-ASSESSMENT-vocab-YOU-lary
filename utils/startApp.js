import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../components/shared/domBuilder';

const startApp = () => {
  domBuilder(); // Builds the DOM
  navBar(); // Dynamically adds the nav
  logoutButton(); // add the logout button to navbar
};

export default startApp;
