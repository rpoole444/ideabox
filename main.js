//-------------------------querySelectors------------------------
var sideButton = document.querySelector('.side-button');
var saveButton = document.querySelector('.save-button');

var titleInput = document.querySelector('.title-label-input');
var bodyInput = document.querySelector('.body-input');
var searchInput = document.querySelector('.search-bar');

var searchIcon = document.querySelectorAll('.search-icon');
var redStar = document.querySelectorAll('.red-star-icon');
var whiteStar = document.querySelectorAll('.white-star-icon');
var whiteX = document.querySelectorAll('.white-x-icon');
var commentIcon = document.querySelectorAll('.comment-icon');

var cardContainer = document.querySelectorAll('.card-container')
var cardTitle = document.querySelectorAll('card-title');
var cardBody = document.querySelectorAll('card-body');
var cardGrid = document.querySelector('.card-grid')

// -----------------global variables-----------------------------------

var ideaBoxArray = [ ]
var titleInputEnteredVar = false
var bodyInputEnteredVar = false


// ----------------eventListeners-----------------------
window.addEventListener('load', disableSaveButton);

titleInput.addEventListener('input', function () {
titleInputEntered()
enableSaveButton();
})

bodyInput.addEventListener('input', function () {
bodyInputEntered()
enableSaveButton();
})


saveButton.addEventListener('click', function() {
saveIdea()
renderIdeaBox()
clearForm()
disableSaveButton()
})



// ----------------functions------------------------------

function saveIdea() {
    
    var newIdeaBox = new Idea(titleInput.value, bodyInput.value)
    ideaBoxArray.push(newIdeaBox)
    bodyInputEnteredVar = false
    titleInputEnteredVar = false
}

function clearForm() {
    titleInput.value = " " ;
    bodyInput.value = " "
}

function renderIdeaBox() {
    cardGrid.innerHTML = "";
    for (var i = 0; i < ideaBoxArray.length; i++){
    cardGrid.innerHTML += `
            <div class="card-container new-card" id=${ideaBoxArray[i].id}>
                <div class="card-header">
                    <img class="red-star-icon" src="assets/star-active.svg">
                    <img class="white-x-icon" src="assets/delete.svg">
                </div>
                <h2 class="card-title">${ideaBoxArray[i].title}</h2>
                <p class="card-body rendered-body">${ideaBoxArray[i].body}</p>
                <div class="card-footer">
                    <img class="comment-icon" src="assets/comment.svg">
                    <a class="comment-text"> Comment</a>
                </div>
            </div>`
    }
}


function disableSaveButton() {
    saveButton.disabled = true;
}

function enableSaveButton() {
    if (titleInputEnteredVar  && bodyInputEnteredVar) {
        saveButton.disabled = false;
    }
}

function titleInputEntered() {
titleInputEnteredVar = true;
}

function bodyInputEntered() {
bodyInputEnteredVar = true;
}

cardContainer.addEventListener('click', function(event) {
    deleteCard(event)
});

function deleteCard(event) {
    console.log('Hello')
    if(event.target.classList.contains(`white-x-icon`)) {
      event.target.closest('.new-card').remove();
    }
  }
