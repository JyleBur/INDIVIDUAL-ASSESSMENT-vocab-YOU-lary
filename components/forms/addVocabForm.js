import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// When clicked create entry, runs this code to clear dom and create a domString that is then rendered to the DOM
// value="${obj.category || ''}" part ensures that the radio buttons will have the value of obj.category if it exists, or an empty string if it doesn't, allowing the form to pre-select the appropriate radio button if necessary.
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group">
      <label for="title">Word Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Word Title" value="${obj.title || ''}" required>
    </div>
    <style>
    .form-check {
      display: inline-block;
      margin-right: 10px;
    }
  </style>
  <div id="subject-check">
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio1" name="optradio" value="Javascript" value="${obj.category || ''}" required>
      <label class="form-check-label" for="radio1">Javascript</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio2" name="optradio" value="HTML" value="${obj.category || ''}" required>
      <label class="form-check-label" for="radio2">HTML</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio3" name="optradio" value="CSS" value="${obj.category || ''}" required>
      <label class="form-check-label" for="radio3">CSS</label>
    </div>
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
