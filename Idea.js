class Idea {
    constructor (title, body) {
            this.title = title
            this.body = body
            this.id = Date.now();
            this.star = false;
        }
updateIdea(event) {
        for (var i = 0; i < ideaBoxArray.length; i++) {
                var grandparentIdToString = parseInt(event.target.parentElement.parentElement.id)
                if (grandparentIdToString === ideaBoxArray[i].id && event.target.classList.contains('white-star-icon')) {
                       ideaBoxArray[i].star = true
                         console.log("Mayb", ideaBoxArray)
        }
                else if (grandparentIdToString === ideaBoxArray[i].id && event.target.classList.contains('red-star-icon')) {
                        ideaBoxArray[i].star = false
                        console.log("better?", ideaBoxArray)
                }
        }
} 
}       




//         updateIdea(event) {
//                 console.log(event.target)
//                 if (event.target.classList.contains('white-star-icon')) {
//                         console.log("array with updated star", ideaBoxArray)
//                         console.log("OI with updated star", newIdeaBox)
//                         return newIdeaBox.star = true

//                 }
//                 if (event.target.classList.contains('red-star-icon')) {
//                         return newIdeaBox.star = false;
//                 }
//         }
// }  
   
