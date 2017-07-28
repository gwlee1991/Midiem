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

Once in session, the user may click to "Edit" their information from their own profile page. This action turns the page into an interactive form with pre-filled fields. Using the same Cloudinary widget, the user may add a profile picture, which instantaneously updates all components that render the user's image (including the navigation bar, comment form, and story form).

```javascript
export const updateProfile = user => dispatch => (
  UserAPIUtil.updateProfile(user).then(updatedProfile => {
    dispatch(receiveUserProfile(updatedProfile));
    dispatch(receiveCurrentUser(updatedProfile));
    dispatch(clearErrors());
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);```

### Stories & Comments

The user may click on a particular story in the feed to view it in its entirety. They can click the heart to like or unlike it and scroll to the bottom of the page to read and post comments. Stories can be edited or deleted by the original author. Comments can also be destroyed by the original author.

A user may click on an author's name or image (anywhere in the site) and be taken to that author's profile page. The user can see how many followers/following the author has, and click to follow or unfollow them from there.

### Likes & Follows

The user may toggle between two miniature story feeds: "Profile" contains all stories that the author has liked, and "Recommends" lists all stories written by people that that particular author follows. The feeds are curated by querying the "Likes", "Follows" and "Stories" database tables via the respective controllers, and sending only applicable stories back to the React component. These mini-feeds update instantaneously when the user alters their likes and/or follows.

Here is the logic for toggling the mini-feeds, and for tailoring user options based on who is logged-in:


```javascript
componentWillReceiveProps(nextProps) {
  const { match, fetchProfile, fetchRecommendedStories,
    fetchLikedStories, userProfile } = this.props;
  if (match.params.userId !== nextProps.match.params.userId) {
    fetchProfile(nextProps.match.params.userId);
  }
  if (match.path !== nextProps.match.path) {
    if (nextProps.match.path === "/users/:userId/recommends") {
      fetchRecommendedStories(userProfile.id);
    } else {
      fetchLikedStories(userProfile.id);
    }
  }
}

userOptions() {
  const { userProfile, currentUser } = this.props;
  if (userProfile.id === currentUser.id) {
    if (userProfile.username !== "Guest") {
      return (
        <Link to={`/users/${currentUser.id}/update`}
          className="follow-unfollow">
          Edit
        </Link>
      );
    }
  } else {
    return (
      <button className="follow-unfollow"
        onClick={this.handleUpdate(userProfile.id)}>
        {this.toggleFollowButton()}
      </button>
    );
  }
}```

## Plans for the Future

I will keep revisiting this codebase to refactor and optimize it further. I will be adding a search bar that filters results, as well as a "Replies" component that allows users to start threads on comments. My goal is to use this web application to build out a desktop and mobile application. This codebase is a great jumping off point for learning and implementing new technologies, and I definitely plan on doing both of those things!