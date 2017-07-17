## Component Hierarchy

### AuthFormContainer

* AuthForm
* Errors

### IndexContainer

* NavBar

* Posts
 * PostsItem

### TopicContainer

* TopicsIndex
 * TopicIndexItem

### PostsContainer

* StoryDetail
* AuthorDetail

 * CommentInputForm
 * Errors
 * Comments
   * CommentsItem

### PostInputContainer

* InputForm
* Errors

* PublishDropdown

### UserProfileContainer

* UserDetail
* Errors



| Routes       |                      |
|--------------|----------------------|
| path         | component            |
| /sign-in     | AuthFormContainer    |
| /sign-up     | AuthFormContainer    |
| /index       | IndexContainer       |
| /topics/:id  | TopicIndexItem       |
| /posts/:id   | PostsContainer       |
| /new-post    | PostInputContainer   |
| /users/:id   | UserProfileContainer |
