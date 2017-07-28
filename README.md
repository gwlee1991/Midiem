# Midiem

[Midiem live](https://midiem.herokuapp.com/#/ "Midiem's Homepage")

Midiem is a full-stack web application inspired by Medium, a story sharing and writing platform. Midiem was built using Ruby on Rails for the backend, a PostgresSQL database, and Redux as its frontend architectural framework and using HTML/CSS to style.

## Features

* Sign up or log in securely, using BCrypt password protection and authentication
* User profile which allows viewing of stories posted by user and allows updating user profile picture
* Filter stories by topic
* be able to search by post's title, body and author's username
* Write stories, and update or delete authored-stories
* Attach images for user profile and new stories
* Post comments on stories, and remove authored-comments

![alt text](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501265035/Screen_Shot_2017-07-28_at_11.01.22_kecmrz.png "Midiem's landing page")


### Feed

The site's landing page is a feed of top 2 stories in each topic. Stories are stored in one table in the database that has columns: `title`, `body`, `author_id`, `topic_id`, `image_url`, and `created_at` / `updated_at`. 

 The user may filter stories by clicking on one of five topics, which will trigger a API request to retrieve only stories with that specific `topic_id`. If a user clicks on a story, this will trigger a AIP request to retrieve the story and the comments that have the `post_id` that matches the `post.id`. Users that are not logged in will not be able to write any comments or write any stories. If logged in, they will be have access to writting comments and stories, and also be able to edit/delete stories that they have wrote and delete comments that they have wrote.

When writing a new story, users may upload a cover image to their story. I have used the cloudinary widget to store and retrieve all the images. A default image has been set up so that if an user does not upload an image, my backend will set a default url right before creating the data in the database. Once the story is published the user will be redirected to the story show page. If user wanted to return back to the main page, they could simply click on the logo in the header which is set as a default component for all urls.

![alt text](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501267113/Screen_Shot_2017-07-28_at_11.37.56_u10y5k.png "New post form")

### Users

To protect user's password, instead of passing back the actually password to the backend and frontend, I have used BCrypt to encypt the user's password by salting and hashing. The encrypted password, called a `password_digest` is what is being saved into the database. Along with the `password_digest`, the `username`, `session_token`, and `image_url` is stored in the users table. Just like story `image_url`s the user has a default image when first created. The user is able to upload a new profile picture in their profile page. I have created an "Auth" route and "Protected" routes. "Auth" route makes sure that logged in users don't have access to the log in page and the "Protected" routes redirects an user to the login/signup page if they are not logged in. I haven't put too much restrictions for non-logged-in users so they are able to view all stories and comments but not able to write/edit/delete stories or comments.


```javascript
export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(user => {
        dispatch(receiveCurrentUser(user));
    })
);```

### Stories & Comments

When the user clicks on a story's title or image, they will be redirected to the actual story show page. At the bottom of the show page, the user (if logged in) will be able to view and leave comments for that story. If not logged in, the user will simply just be able to view the comments. The author of the post will be able to delete or edit the story where on click will be redirected to an edit page. If the post is deleted, all the comments will not only be deleted from the frontend but from the database as well due to the dependent destroy on the posts table.

The user may click on a particular story in the feed to view it in its entirety. They can click the heart to like or unlike it and scroll to the bottom of the page to read and post comments. Stories can be edited or deleted by the original author. Comments can also be destroyed by the original author.

A user may click on an author's name or image (anywhere in the site) and be taken to that author's profile page. The user can see how many followers/following the author has, and click to follow or unfollow them from there.

![alt text](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501269394/Screen_Shot_2017-07-28_at_12.15.31_sdiv3p.png "story page with comments at the bottom")


### Search

By clicking on the magnifying glass on the header, the user is directed to a search page where the user is able to search the stories by their, title, contents, and author's username. The style was kept as minimalistic to match how the actual Medium search component looked like. The search implemented a array method `filter` which did a fontend search by grabbing the posts(stories) that had the search query included either in their title, body, or author's username. The code to initiate the search is below.

```javascript
const filterPost = posts.filter(
      post =>
        post.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        post.body.toLowerCase().includes(this.state.search.toLowerCase()) ||
        post.author.username.toLowerCase().includes(this.state.search.toLowerCase())
    );
```

### Topics

Below the header is a topic navigation bar. It has all the lists of topics available. By click on the topic, the user will be navigated to a new page with all the posts that have the `topic_id` that matches `topic.id`. The search was done in the frontend by grabbing all the stories on load and then search through the stories and filter out the stories that have the match.

![alt text](http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501273755/Screen_Shot_2017-07-28_at_13.28.50_vhxytd.png "story page with comments at the bottom")


## Plans for the Future

A lot of the queries for this project was done on the frontend for deeper understanding of redux. However, I will visit this codebase in the future so that all the querying is done on the backend which should not only DRY up the code on the frontend but also provide better user experience by improving speed. Also, common features, such as likes and follows, were omitted from the project. I plan to spend some time working on those two features.