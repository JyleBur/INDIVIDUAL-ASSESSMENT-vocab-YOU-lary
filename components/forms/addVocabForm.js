import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group">
      <label for="title">Word Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Word Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <input type="text" class="form-control" id="category" placeholder="Word Category" value="${obj.category || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" placeholder="Word Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit Word</button>
  </form>`;

  renderToDom('#form-container', domString);
};

export default addVocabForm;
