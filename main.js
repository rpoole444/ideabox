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

// -----------------global variables-----------------------------------

var ideaBoxArray = [ ]

// ----------------eventListeners-----------------------

saveButton.addEventListener('click', function() {
saveIdea()
updateIdea()
clearForm()
})

// ----------------functions------------------------------

function saveIdea() {
    
    var newIdeaBox = new Idea(titleInput.value, bodyInput.value)
    console.log(newIdeaBox)
    ideaBoxArray.push(newIdeaBox)
    console.log(ideaBoxArray)
}

function clearForm() {
    titleInput.value = " " ;
    bodyInput.value = " "
}


function renderIdeaBox() {
    cardContainer.innerHTML = ' ';
    for (var i = 0; i < ideaBoxArray.length; i++){
    cardContainer[i].innerHTML += `
                <div class="card-header">
                    <img class="red-star-icon" src="assets/star-active.svg">
                    <img class="white-x-icon" src="assets/delete.svg">
                </div>
                <h2 class="card-title">${titleInput.value}</h2>
                <p class="card-body">${bodyInput.value}</p>
                <div class="card-footer">
                    <img class="comment-icon" src="assets/comment.svg">
                    <a class="comment-text"> Comment</a>
                </div>`
    }
}