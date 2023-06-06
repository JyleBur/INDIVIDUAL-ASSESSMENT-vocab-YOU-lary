import renderToDom from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Cards have been created under your account, Please create one</h1>';
  renderToDom('#app', domString);
};

export default emptyVocab;
