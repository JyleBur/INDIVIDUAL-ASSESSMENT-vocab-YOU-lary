import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    const createdTimestamp = item.createdAt;
    const date = new Date(createdTimestamp);

    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-title">
          <h5>${item.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Category: ${item.category}</li>
          <li class="list-group-item">Created At: ${formattedDate} ${formattedTime}</li>
          <li class="list-group-item">${item.definition}</li>
        </ul>
      </div>`;
  });
  renderToDom('#vocab', domString);
};

export default showVocab;
