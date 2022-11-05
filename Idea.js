class Idea {
    constructor (title, body) {
            this.title = title
            this.body = body
            this.id = Date.now();
            this.star = false;
        }
        updateIdea(event) {
                if (event.target.classList.contains('white-star-icon')) {
                        newIdeaBox.star = true; 
                }
                if (event.target.classList.contains('red-star-icon')) {
                        newIdeaBox.star = false;
                }
                console.log("array with updated star", ideaBoxArray)
                console.log("OI with updated star", newIdeaBox)
        }
}
   


