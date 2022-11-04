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

// ----------------eventListeners-----------------------
window.addEventListener('load', disableOnLoad);

titleInput.addEventListener('input', function() {
enableWithInput()
testTitle()
})
bodyInput.addEventListener('input', function() {
enableWithInput()
testBody()
})

saveButton.addEventListener('click', function() {
toggleSave()
saveIdea()
renderIdeaBox()
clearForm()
})

// ----------------functions------------------------------

function saveIdea() {
    
    var newIdeaBox = new Idea(titleInput.value, bodyInput.value)
    ideaBoxArray.push(newIdeaBox)
}

function clearForm() {
    titleInput.value = " " ;
    bodyInput.value = " "
}

function renderIdeaBox() {
    cardGrid.innerHTML = "";
    for (var i = 0; i < ideaBoxArray.length; i++){
    cardGrid.innerHTML += `
            <div class="card-container">
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



function enableWithInput() {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        saveButton.disabled = false;
    }
}

function disableOnLoad() {
    saveButton.disabled = true;
}



function testTitle() {
    console.log("titleInput")
}

function testBody() {
    console.log("bodyInput")
}