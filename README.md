# Central African Lifestyle Magazine (CALM)
This project will be a simple blog platform where users can **read** blogs, **write** a blog, **update** a blog, and **delete** a user owned blog.

This will be the MVP for a blogging platform called *Central African Lifestyle Magazine (CALM)*. This aims to provide culturally sensitive health, wellness, and lifestyle advice for young women of Central African descent. This project will be continued as a contracted project with my client going forward.

# User Stories
* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As an unregistered user, I would like to see all users blog posts.
* As an unregistered user, I would like to see comments on those blog posts.
* As a signed in user, I would like to create blog posts.
* As a signed in user, I would like to update my blog posts.
* As a signed in user, I would like to delete my blog posts.

# Entities
<h3>Resources</h3>

* User
    - This represents anyone who is registered on the platform. A User is able to view all blogs, write and publish a blog, edit their blogs, and delete their blogs.
* Blog
    - This represents a blog post. A Blog will have a title, an author, data published, date edited, and the content. For MVP, the displayed content will only be plain text.
* Comment (Stretch Goal)
    - This represents a comment for a specific Blog. A Comment will have an author, date added, and the content.

<h3>ERD</h3>
<p align="center">
<img src="https://media.git.generalassemb.ly/user/21060/files/58a39880-c7e7-11e9-92a5-bf1ff2333e22" alt="Capstone ERD" title="Capstone ERD" height="400">
</p>

# Wireframes

<h3>Homepage and Login</h3>
<p align="center">
<img src="https://i.imgur.com/fvJZWiU.jpg" alt="User Homepage" title="Homepage" height="400">
</p>

<h3>Blog View</h3>
<p align="center">
<img src="https://i.imgur.com/orEuHX2.jpg" alt="Blog View" title="Blog View" height="400">
</p>

<h3>New Post</h3>
<p align="center">
<img src="https://i.imgur.com/2IJQi6o.jpg" alt="New Post" title="New Post" height="400">
</p>

# Technologies and Workflow
* Express using `calm-api`
* React using `react-auth-template`
* Node
* MongoDB
* Mongoose
* CURL for API testing
* Heroku for API deployment

Error Driven Development and Behavior Driven Development will be used to guide the development process for this project.

# Stretch Goals
These are goals requested by my client that may be implemented during project week:

* As a signed in user, I would like to comment on other users' blog posts.
* As a signed in user, I would like to update my blog posts and comments.
* As a signed in user, I would like to delete my blog posts and comments.
* As a signed in user, I would like to follow another user
* As a signed in user, I would like to receive emails about my subscription
