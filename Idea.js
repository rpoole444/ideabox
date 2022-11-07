class Idea {
    constructor (title, body) {
            this.title = title
            this.body = body
            this.star = false;
            this.id = Date.now();
        }
updateIdea(event) {
        for (var i = 0; i < ideaBoxArray.length; i++) {
                var grandparentIdToString = parseInt(event.target.parentElement.parentElement.id)
                if (grandparentIdToString === ideaBoxArray[i].id && event.target.classList.contains('white-star-icon')) {
                        ideaBoxArray[i].star = true
                         console.log("Starred", ideaBoxArray)
        }
                else if (grandparentIdToString === ideaBoxArray[i].id && event.target.classList.contains('red-star-icon')) {
                        ideaBoxArray[i].star = false
                        console.log("Unstarred", ideaBoxArray)
                }
        }
} 
return
}       





   
