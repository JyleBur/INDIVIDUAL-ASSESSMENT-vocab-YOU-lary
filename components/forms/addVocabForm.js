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

  <div id="subject-check">
    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="Javascript" value="${obj.category || ''}" required>Javascript
    <label class="form-check-label" for="radio1"></label>
  </div>
  <div class="form-check">
    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="HTML" value="${obj.category || ''}" required>HTML
    <label class="form-check-label" for="radio2"></label>
  </div>
  <div class="form-check">
  <input type="radio" class="form-check-input" id="radio3" name="optradio" value="CSS" value="${obj.category || ''}" required>CSS
  <label class="form-check-label" for="radio1"></label>
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
