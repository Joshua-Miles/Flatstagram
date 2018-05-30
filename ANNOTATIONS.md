# -Concerns-
These are some concerns about the code either as it was provided in the starter or as the instructions explicitly stated:

## ID Misuse

+ All comment forms have an id ("comment-form") that is not unique. This breaks w3 standards: https://www.w3.org/TR/html4/struct/global.html#h-7.5.2

## Method `Comment.prototype.findImage` is not intuitive

+ The comment must make an unnecessary assumption about the Image object to do this
+ The Image object could supply this method more effectively
+ Safer in the event of refactoring 
+ Image could serve as a property of the comment object (comment.Image)

## Methods `commentEl` / `imageEl` methods are unnecessarily verbose

+ These will always be accessed in a context such as `comment.commentEl`, or `this.commentEl`, which is repetitious
+ Using the full word "element" (or better yet, "html"), is more descriptive in less characters: `comment.html`, `this.html`

# -Justifications-
Justifications of a few of my more questionable decisions:

## Use of Underscore
Because underscore was included in the project already, it seemed more appropriate to use _.each rather than jQuery's $element.each method, as the underscore pattern can be used more universally

## Iterating through forms and attaching listeners separately
While a "single" listener could have been applied to $addCommentForms, and the individual form element could be extracted from the event object, I have always found logic easier to follow when we register events one element at a time for a few reasons:
+ We keep a single variable to represent the element both in the registration and the callback
+ We dont have to rely on the event to give us the html element we expect (can be sketchy in some cases)
+ Each element will have its own listener eventually anyway, making the impact on memory fairly negligible, unless we are dealing with millions of elements