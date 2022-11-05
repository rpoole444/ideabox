class Idea {
    constructor (title, body) {
            this.title = title
            this.body = body
            this.id = Date.now();
            this.star = false;
        }
        updateIdea(id) {
                console.log(ideaBoxArray)
                for(var i = 0; i < ideaBoxArray.length; i++){
                if (ideaBoxArray.id === id) {
                ideaBoxArray.star = true; 
                }
                console.log(ideaBoxArray)
                }
        }
}
