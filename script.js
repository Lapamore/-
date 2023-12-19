document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function loadNotes() {
    const notesContainer = document.getElementById("notes-container");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(function (note) {
        createNoteElement(note);
    });
}

function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const notesContainer = document.getElementById("notes-container");
        const notes = JSON.parse(localStorage.getItem("notes")) || [];

        const newNote = {
            id: Date.now(),
            text: noteText,
            date: new Date().toLocaleString(), // Добавление даты
        };

        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        createNoteElement(newNote);
        noteInput.value = "";
    }
}

function createNoteElement(note) {
    const notesContainer = document.getElementById("notes-container");

    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.setAttribute("data-id", note.id);

    noteElement.innerHTML = `
        <p>${note.text}</p>
        <div class="note-date">${note.date}</div>
        <button class="delete-button" onclick="deleteNote(${note.id})">Удалить</button>
    `;

    notesContainer.appendChild(noteElement);
    fadeInElement(noteElement);
}

function deleteNote(noteId) {
    const notesContainer = document.getElementById("notes-container");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.filter(function (note) {
        return note.id !== noteId;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    const noteElement = document.querySelector(`.note[data-id="${noteId}"]`);
    if (noteElement) {
        fadeOutElement(noteElement, function () {
            noteElement.remove();
        });
    }
}

function fadeInElement(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const intervalId = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 50);
}

function fadeOutElement(element, callback) {
    let opacity = 1;
    const intervalId = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, 50);
}
