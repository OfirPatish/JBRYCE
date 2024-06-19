document.getElementById("addNote").addEventListener("click", function () {
  var noteInput = document.getElementById("noteInput");

  if (noteInput.value.trim() === "") {
    return;
  }

  var note = document.createElement("div");
  note.className = "note";

  var noteText = document.createElement("span");
  noteText.textContent = noteInput.value;
  note.appendChild(noteText);

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.appendChild(deleteButton);
  document.getElementById("notesContainer").appendChild(note);
  noteInput.value = "";

  // Add double click event listener for editing
  noteText.addEventListener("dblclick", function () {
    var input = document.createElement("input");
    input.value = noteText.textContent;
    input.style.width = "400px";
    note.replaceChild(input, noteText);

    input.addEventListener("blur", function () {
      noteText.textContent = input.value;
      note.replaceChild(noteText, input);
      saveNotes();
    });
  });

  saveNotes();
});

// Save notes to localStorage
function saveNotes() {
  try {
    var noteSpans = document.querySelectorAll(".note span");
    var notes = [];
    for (var index = 0; index < noteSpans.length; index++) {
      notes.push(noteSpans[index].textContent);
    }
    if (notes.length === 0) {
      localStorage.removeItem("notes");
    } else {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  } catch (storageError) {
    console.error("Error saving to localStorage", storageError);
  }
}

// Load notes from localStorage
window.onload = function () {
  var savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((note) => {
    var noteInput = document.getElementById("noteInput");
    noteInput.value = note;
    document.getElementById("addNote").click();
    noteInput.value = "";
  });
};
