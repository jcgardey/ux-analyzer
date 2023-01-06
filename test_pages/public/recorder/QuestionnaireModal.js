function QuestionnaireModal(id) {
  this.id = id;
}

QuestionnaireModal.prototype.show = function () {
  this.container = document.createElement('div');
  this.container.id = 'recorder-questionnaire';

  const title = document.createElement('h5');
  title.className = 'recorder-title';
  title.textContent = 'Por favor responda a las siguientes preguntas';
  title.style.textAlign = 'center';
  this.container.appendChild(title);

  this.questions = document.createElement('div');
  this.questions.style.margin = '10px';
  this.questions.appendChild(
    this.createQuestion(
      'La funcionalidad del sistema cumple con los requerimientos de la tarea',
      'question_1'
    )
  );
  this.questions.appendChild(
    this.createQuestion('Este sistema es fácil de usar', 'question_2')
  );
  this.container.appendChild(this.questions);

  if (!(localStorage.getItem('age') || localStorage.getItem('hours'))) {
    this.questions.appendChild(this.createInput('age', 'Edad'));
    this.questions.appendChild(
      this.createInput('hours', 'Cantidad de horas diarias que utiliza la web')
    );
  }

  this.container.appendChild(this.createSubmitButton());

  document.body.appendChild(this.container);
};

QuestionnaireModal.prototype.createQuestion = function (
  questionTitle,
  questionName
) {
  const question = document.createElement('div');
  //question.style.margin = '40px 0';
  question.className = 'question-container';

  const p = document.createElement('p');
  p.className = 'recorder-question';
  p.textContent = questionTitle;
  question.appendChild(p);

  const radios = document.createElement('div');
  radios.style.margin = '10px';
  radios.innerHTML = `<span class="recorder-label">En completo desacuerdo</span>
  <input class="recorder-radio" type="radio" name="${questionName}" value="1"/>
  <input class="recorder-radio" type="radio" name="${questionName}" value="2"/>
  <input class="recorder-radio" type="radio" name="${questionName}" value="3"/>
  <input class="recorder-radio" type="radio" name="${questionName}" value="4"/>
  <input class="recorder-radio" type="radio" name="${questionName}" value="5"/>
  <span class="recorder-label">Completamente de acuerdo</span>`;
  question.appendChild(radios);
  return question;
};

QuestionnaireModal.prototype.createInput = function (name, label) {
  const div = document.createElement('div');
  div.style.margin = '20px 0';
  const labelElement = document.createElement('label');
  labelElement.textContent = label;
  labelElement.className = 'recorder-question';
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'recorder-input';
  input.name = name;
  div.appendChild(labelElement);
  div.appendChild(input);
  return div;
};

QuestionnaireModal.prototype.createSubmitButton = function () {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.margin = '30px 10px';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'questionnaire-button';
  button.textContent = 'Enviar';

  const me = this;
  button.addEventListener('click', function () {
    me.sendQuestionnaire();
  });

  buttonsContainer.appendChild(button);
  return buttonsContainer;
};

QuestionnaireModal.prototype.validateQuestions = function () {
  const questions = ['question_1', 'question_2'];
  return (
    questions.filter(
      (q) => document.querySelector(`input[name="${q}"]:checked`) !== null
    ).length === questions.length
  );
};

QuestionnaireModal.prototype.validateInputs = function () {
  const inputs = ['age', 'hours'];
  return (
    inputs.filter(
      (i) =>
        document.querySelector(`input[name="${i}"]`)?.value !== '' ||
        localStorage.getItem(i)
    ).length === inputs.length
  );
};

QuestionnaireModal.prototype.sendQuestionnaire = function () {
  if (!this.validateQuestions() || !this.validateInputs()) {
    console.log('form invalido');
    return false;
  }
  if (!localStorage.getItem('age') && !localStorage.getItem('hours')) {
    localStorage.setItem(
      'age',
      document.querySelector(`input[name="age"]`).value
    );
    localStorage.setItem(
      'hours',
      document.querySelector(`input[name="hours"]`).value
    );
  }

  const body = {
    id: this.id,
    question_1: document.querySelector('input[name="question_1"]:checked')
      .value,
    question_2: document.querySelector('input[name="question_2"]:checked')
      .value,
    age: localStorage.getItem('age'),
    hours: localStorage.getItem('hours'),
  };

  window.screenRecorder.sendScreencast(
    'http://localhost:1702/micrometrics/screencast',
    'no-cors',
    body
  );
  window.screenRecorder.sendScreencast(
    'https://ijhcs-screencasts.herokuapp.com/api/screencast',
    'cors',
    body
  );
  this.remove();
};

QuestionnaireModal.prototype.remove = function () {
  this.container.parentNode.removeChild(this.container);
};

window.QuestionnaireModal = QuestionnaireModal;

