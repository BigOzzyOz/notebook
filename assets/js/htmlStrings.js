function renderStandard() {
  for (let i = 0; i < noteTitle.length; i++) {
    savedPost.innerHTML += /*html*/ `
      <div id="${i}" class="note bg_${noteColor[i]} standard"  onclick="editPost('standard', ${i})">
          <h4>${noteTitle[i]}</h4>
          <p>${noteText[i]}</p>
      </div>
      `;
  }
}

function renderArchiv() {
  for (let i = 0; i < archiveNoteTitle.length; i++) {
    archiv.innerHTML += /*html*/ `
      <div id="arch${i}" class="note bg_${archiveNoteColor[i]} archived" onclick="editPost('archived', ${i})">
          <h4>${archiveNoteTitle[i]}</h4>
          <p>${archiveNoteText[i]}</p>
      </div>
      `;
  }
}

function renderTrash() {
  for (let i = 0; i < deleteNoteTitle.length; i++) {
    trash.innerHTML += /*html*/ `
      <div id="del${i}" class="note bg_${deleteNoteColor[i]} deleted" onclick="editPost('deleted', ${i})">
          <h4>${deleteNoteTitle[i]}</h4>
          <p>${deleteNoteText[i]}</p>
      </div>
      `;
  }
}

function normalPost(i) {
  document.getElementById('postBig').innerHTML = /*html*/ `
    <section class="newPost" id="postOverview">
              <img
              src="ressources/icons/circle-xmark-regular.svg"
              alt="x-icon"
              class="icon close"
              onclick="closeWindow('postBig')"
            />
              <input
                id="postTitle"
                type="text"
                placeholder="Neue Notiz . . ."
              />
              <textarea
                id="postNote"
                placeholder="Hier deine Notiz"
              ></textarea>
              <form id="postRadio">
                <label for="standardPost"
                  ><input
                    type="radio"
                    name="rwLabel"
                    id="standardPost"
                    onchange="addBgStandard('postBig')"
                    value="standard"
                    />Standard
                </label>
                <label for="importantPost">
                  <input
                    type="radio"
                    name="rwLabel"
                    id="importantPost"
                    value="important"
                    onchange="addBgImportant('postBig')"
                  />Wichtig!
                </label>
                <label for="todoPost">
                  <input
                    type="radio"
                    name="rwLabel"
                    id="todoPost"
                    onchange="addBgTodo('postBig')"
                    value="todo"
                  />ToDo
                </label>
                <input type="reset" value="" class="d-none" />
              </form>
              <span class="buttons">
                <button class="" id="saveNote" onclick="saveEditPost(${i}, 'postBig')">
                  Speichern
                </button>  
                <button class="" id="archivNote" onclick="archivPost(${i}, 'postBig')">
                  Archivieren
                </button>
                <button class="" id="deleteNote" onclick="deletePost(${i}, 'postBig')">
                  Löschen
                </button>
    `;
}

function buttonChange() {
  let ele = document.getElementById('postBig');
  if (ele.classList.contains('archived')) {
    document.getElementById('archivNote').innerHTML = 'Standard';
  }
  if (ele.classList.contains('deleted')) {
    document.getElementById('deleteNote').innerHTML = 'Retten/Löschen';
  }
}


function empty() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Fehler</h3>
    <p>Bitte alle Felder ausfüllen!</p>
    <button onclick="ok()">Okay</button>
    `;
}

function staToArch() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Sicher?</h3>
    <p>Soll deine Notiz archiviert werden?</p>
    <span class="buttons">
      <button onclick="confirmAction(true)">Okay</button>
      <button onclick="confirmAction(false)">Nein</button>
    </span>
    `;
}

function archToArch() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Bereits Archiviert!</h3>
    <p>Möchtest du deine Notiz wieder in aus dem Archiv holen?</p>
    <span class="buttons">
        <button onclick="confirmAction(true)">Okay</button>
        <button onclick="confirmAction(false)">Nein</button>
    </span>
    `;
}

function delToArch() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Bereits Gelöscht!</h3>
    <p>Möchtest du deine Notiz dennoch Archivieren?</p>
    <span class="buttons">
      <button onclick="confirmAction(true)">Okay</button>
      <button onclick="confirmAction(false)">Nein</button>
    </span>
    `;
}

function deleteAllPosts() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Bist du Sicher?</h3>
    <p>Möchtest du alle deine Notizen aus dem Papierkorb endgültig löschen?</p>
      <span class="buttons">
      <button onclick="confirmAction(true)">Okay</button>
      <button onclick="confirmAction(false)">Nein</button>
    </span>
    `;
}

function delPost() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <h3>Bist du Sicher?</h3>
    <p>Möchtest du deine Notiz in den Papierkorb verschieben?</p>
    <span class="buttons">
        <button onclick="confirmAction(true)">Okay</button>
        <button onclick="confirmAction(false)">Nein</button>
    </span>
    `;
}

function deletePostChoice() {
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerHTML = /*html*/ `
    <img
        src="ressources/icons/circle-xmark-regular.svg"
        alt="x-icon"
        class="icon close"
        onclick="ok()"
    />
    <h3>Bereits Gelöscht!</h3>
    <p>Möchtest du deine Notiz retten oder Endgültig löschen?</p>
    <span class="buttons">
        <button onclick="confirmAction(true)">Retten</button>
        <button onclick="confirmAction(false)">Löschen</button>
    </span>
    `;
}
