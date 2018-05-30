// create Comment class here
class Comment {

    constructor(content, imageID){
        this.id = Comment.all.length;
        this.commentContent = content
        this.imageID = imageID
        let parentImage = this.findImage(imageID)
        parentImage.Comments.push(this)
        Comment.all.push(this)
    }

    commentEl(){
        return `<li class="comment" id="comment.${this.id}">${this.commentContent}</li>`
    }

    findImage(imageID){
        return Image.all.find( image => imageID === image.id)
    }
}

Comment.all = new Array;