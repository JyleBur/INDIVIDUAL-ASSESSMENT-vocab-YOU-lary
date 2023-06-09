import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyVocab = () => {
  const domString = '<p>You have not created any vocab words.</p>';
  renderToDom('#vocab', domString);
};

const showVocab = (array) => {
  clearDom();

  if (array.length === 0) {
    emptyVocab();
    return;
  }

  let domString = '';
  let domFilter;
  array.forEach((item) => {
    const createdTimestamp = item.createdAt;
    const date = new Date(createdTimestamp);

    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    domFilter = `        
    <button type="button" class="btn btn-outline-success" id="javascript-btn">Javascript</button>
    <button type="button" class="btn btn-outline-success" id="html-btn">HTML</button>
    <button type="button" class="btn btn-outline-success" id="css-btn">CSS</button>`;

    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-title">
          <h5>${item.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Category: ${item.category}</li>
          <li class="list-group-item">${item.definition}</li>
          <li class="list-group-item">Created At: ${formattedDate} ${formattedTime}</li>
          <button id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger">Delete</button>
        </ul>
      </div>`;
  });
  renderToDom('#filter', domFilter);
  renderToDom('#vocab', domString);
};

export default showVocab;
