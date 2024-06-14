function actionSave(newNoteTitle, newNoteText, newNoteColor) {
  noteTitle.push(newNoteTitle);
  noteText.push(newNoteText);
  noteColor.push(newNoteColor);
  document.getElementById('title').value = '';
  document.getElementById('note').value = '';
}

function archivHelp(loc, i, errorMsg, title, text, color, toTitle, toText, toColor) {
  error(`${errorMsg}`);
  let checkAnswer = setInterval(function () {
    if (answer !== 'maybe') {
      clearInterval(checkAnswer);
      if (answer === 'yes') {
        moveArchiv(i, title, text, color, toTitle, toText, toColor);
        reload(loc);
      }
    }
  }, 100);
}

function archivPost(i, loc) {
  let ele = document.getElementById('postBig');
  if (ele.classList.contains('standard')) {
    archivHelp(loc, i, 'staToArch', noteTitle, noteText, noteColor, archiveNoteTitle, archiveNoteText, archiveNoteColor);
  }
  if (ele.classList.contains('archived')) {
    archivHelp(loc, i, 'archToArch', archiveNoteTitle, archiveNoteText, archiveNoteColor, noteTitle, noteText, noteColor);
  }
  if (ele.classList.contains('deleted')) {
    archivHelp(loc, i, 'delToArch', deleteNoteTitle, deleteNoteText, deleteNoteColor, archiveNoteTitle, archiveNoteText, archiveNoteColor);
  }
}

function deleteAll() {
  error('deleteAllPosts');
  let checkAnswer = setInterval(function () {
    if (answer !== 'maybe') {
      clearInterval(checkAnswer);
      if (answer === 'yes') {
        deleteNoteTitle.splice(0, deleteNoteTitle.length);
        deleteNoteText.splice(0, deleteNoteText.length);
        deleteNoteColor.splice(0, deleteNoteColor.length);
        reload('trashFolder');
      }
    }
  }, 100);
}

function deletePost(i, loc) {
  let ele = document.getElementById('postBig');
  if (ele.classList.contains('standard')) {
    deletePostHelp(i, loc, 'delPost', noteTitle, noteText, noteColor, deleteNoteTitle, deleteNoteText, deleteNoteColor);
  }
  if (ele.classList.contains('archived')) {
    deletePostHelp(i, loc, 'delPost', archiveNoteTitle, archiveNoteText, archiveNoteColor, deleteNoteTitle, deleteNoteText, deleteNoteColor);
  }
  if (ele.classList.contains('deleted')) {
    deletePostHelp(i, loc, 'deletePostChoice', deleteNoteTitle, deleteNoteText, deleteNoteColor, noteTitle, noteText, noteColor);
  }
}

function deletePostHelp(i, loc, errorMsg, title, text, color, toTitle, toText, toColor) {
  error(`${errorMsg}`);
  let checkAnswer = setInterval(function () {
    if (answer !== 'maybe') {
      clearInterval(checkAnswer);
      if (answer === 'yes') {
        spliceOne(i, title, text, color);
        pushOne(toTitle, toText, toColor);
        reload(loc);
      } else if (answer === 'no' && title === deleteNoteTitle) {
        spliceOne(i, title, text, color);
        reload(loc);
      }
    }
  }, 100);
}

function editPost(loc, i) {
  if (loc == 'standard') {
    editPostHelp(i, loc, noteTitle, noteText, noteColor);
  }
  if (loc == 'archived') {
    editPostHelp(i, loc, archiveNoteTitle, archiveNoteText, archiveNoteColor);
  }
  if (loc == 'deleted') {
    editPostHelp(i, loc, deleteNoteTitle, deleteNoteText, deleteNoteColor);
  }
}

function editPostHelp(i, loc, title, text, color) {
  let window = document.getElementById('postBig');
  normalPost(`${i}`);
  window.classList.remove('d-none');
  document.getElementById('postTitle').value = title[i];
  document.getElementById('postNote').value = text[i];
  window.classList.add(`bg_${color[i]}`);
  window.classList.add(loc);
  document.getElementById(`${color[i]}Post`).setAttribute('checked', 'checked');
  buttonChange();
}

function moveArchiv(i, title, text, color, toTitle, toText, toColor) {
  spliceOne(i, title, text, color);
  pushOne(toTitle, toText, toColor);
}

function saveEditHelp(i, loc, title, text, color, editTitle, editText, editColor) {
  title.splice(i, 1, editTitle);
  text.splice(i, 1, editText);
  color.splice(i, 1, editColor);
  reload(loc);
}

function saveEditIf(i, loc, editNoteTitle, editNoteText, editNoteColor) {
  let ele = document.getElementById('postBig');

  if (ele.classList.contains('standard')) {
    saveEditHelp(i, loc, noteTitle, noteText, noteColor, editNoteTitle, editNoteText, editNoteColor);
  }
  if (ele.classList.contains('archived')) {
    saveEditHelp(i, loc, archiveNoteTitle, archiveNoteText, archiveNoteColor, editNoteTitle, editNoteText, editNoteColor);
  }
  if (ele.classList.contains('deleted')) {
    saveEditHelp(i, loc, deleteNoteTitle, deleteNoteText, deleteNoteColor, editNoteTitle, editNoteText, editNoteColor);
  }
}

function saveEditPost(i, loc) {
  let editNoteTitle = document.getElementById('postTitle').value;
  let editNoteText = document.getElementById('postNote').value;
  let editNoteColor = displayRadioValue('rwLabel');

  if (editNoteTitle == '' || editNoteText == '') {
    error('empty');
  } else {
    saveEditIf(i, loc, editNoteTitle, editNoteText, editNoteColor);
  }
}

function savePost(x, loc) {
  let newNoteTitle = document.getElementById('title').value;
  let newNoteText = document.getElementById('note').value;
  let newNoteColor = displayRadioValue('label');
  if (newNoteTitle == '' || newNoteText == '') {
    error(x);
  } else {
    actionSave(newNoteTitle, newNoteText, newNoteColor);
    abortPost(loc);
    save();
    render();
  }
}