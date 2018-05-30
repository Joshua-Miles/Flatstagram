class CommentsController {
  constructor() {
    this.$addCommentForms = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    _.each(this.$addCommentForms, form => {
      let $form = $(form)
      $form.on('submit', e => {
        e.preventDefault();
        let imageID = parseInt($form.attr('data-id'));
        let content = $form.find('.user-text').val();
        let newComment = new Comment(content, imageID)
        this.render(newComment)
      })
    })
  }

  render(comment){
    let image = comment.findImage(comment.imageID);
    let commentWrapper = $(`#${image.commentsWrapperID}`);
    commentWrapper.append(comment.commentEl())
  }
}
