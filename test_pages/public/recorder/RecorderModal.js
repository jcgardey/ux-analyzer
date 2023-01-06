function RecorderModal(screenRecorder) {
  this.screenRecorder = screenRecorder;
  this.create();
}

RecorderModal.prototype.create = function () {
  this.overlay = document.createElement('div');
  this.overlay.id = 'recorder-overlay';

  this.div = document.createElement('div');
  this.div.id = 'recorder-container';
  this.div.className = 'rr-ignore';
  this.title = document.createElement('h5');
  this.div.id = 'recorder-container';
  this.div.appendChild(this.title);
  document.body.appendChild(this.overlay);
  document.body.appendChild(this.div);
  this.createButtons();
  this.initialize();
};

RecorderModal.prototype.initialize = function () {
  this.title.innerHTML = 'Grabar';
  this.overlay.style.display = '';
  this.start.removeAttribute('disabled');
  //this.finish.setAttribute('disabled', true);
  this.abandon.setAttribute('disabled', true);
};

RecorderModal.prototype.createButtons = function () {
  this.start = document.createElement('button');
  this.start.className = 'start';
  this.start.textContent = 'Iniciar';
  const me = this;
  this.start.addEventListener('click', function () {
    me.overlay.style.display = 'none';
    console.log('screencast started');
    me.screenRecorder.createScreencast();
    me.screenRecorder.startRecording();
    me.title.textContent = 'Gabrando';
    me.start.setAttribute('disabled', true);
    //me.finish.removeAttribute('disabled');
    me.abandon.removeAttribute('disabled');
  });

  this.abandon = document.createElement('button');
  this.abandon.textContent = 'Abandonar';
  this.abandon.className = 'stop';
  this.abandon.addEventListener('click', function () {
    me.screenRecorder.stopRecording(false);
    me.initialize();
    new QuestionnaireModal(me.screenRecorder.id).show();
  });

  /*
  this.finish = document.createElement('button');
  this.finish.className = 'stop';
  this.finish.textContent = 'Finalizar';
  this.finish.addEventListener('click', function () {
    me.screenRecorder.stopRecording(true);
    me.initialize();
    new QuestionnaireModal(me.screenRecorder.id).show();
  });*/

  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.justifyContent = 'space-between';
  buttonsContainer.style.margin = '5px';
  buttonsContainer.appendChild(this.start);
  buttonsContainer.appendChild(this.abandon);
  //buttonsContainer.appendChild(this.finish);
  this.div.appendChild(buttonsContainer);
};

RecorderModal.prototype.show = function () {
  this.div.style.display = '';
};
RecorderModal.prototype.hide = function () {
  this.div.style.display = 'none';
};

