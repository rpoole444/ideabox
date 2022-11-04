class Idea {
    constructor (title, body) {
            this.title = title
            this.body = body
            this.id = Date.now();
            this.star = false;
    }
            updateIdea() {
                this.star = true; 
            
}
}
