<p align="center">
<img src="https://i.imgur.com/sNLi2jk.png" alt="CALM logo" title="CALM" height="250">
</p>

# About CALM
This project will be a blog platform where users can **read** blogs, **write** a blog, **update** a blog, and **delete** a user owned blog.

This will be the MVP for a blogging platform called *Central African Lifestyle Magazine (CALM)*. This aims to provide culturally sensitive health, wellness, and lifestyle advice for young women of Central African descent. This project will be continued as a contracted project with my client going forward.

# Important Links
* [Frontend Deployed](https://acupoftee.github.io/calm-frontend)
* [Frontend Repo](https://github.com/acupoftee/calm-frontend)
* [Backend Deployed](https://calm-app.herokuapp.com)
* [Backend Repo](https://github.com/acupoftee/calm-api)

# Planning
This is a contracted project that aims to provide a health and wellness platform for African women and the diaspora. This means that extensive communication with my client was necessary for moving forward. My client's MVP entailed reading a blog, writing a blog, editing a blog, and deleting a blog along with reading a comment, adding a comment, and deleting a comment.

We descoped the project to focus on the Blog only. This gave us plenty of time to familiarize ourselves with React, which we both would like to use in the future. We decided to use React over Handlebars because it's scalable and modular which is ideal for rapid growth.

Standups occured every three hours via text communication. The project was then completed using Behavior Driven Development and Error Driven Development.

MVP for this project was completed in four business days.

# User Stories
* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As an unregistered user, I would like to see all users blog posts.
* As a signed in user, I would like to create blog posts.
* As a signed in user, I would like to update my blog posts.
* As a signed in user, I would like to delete my blog posts.

<h2>Added Stretch Goals</h2>
The following user stories were stretch goals that have been implemented in the app:

* As a signed in user, I would like to comment on other users' blog posts.
* As a signed in user, I would like to update my blog posts and comments.
* As a signed in user, I would like to delete my blog posts and comments.

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
<img src="https://i.imgur.com/eFQCuNy.png" alt="Capstone ERD" title="Capstone ERD" height="400">
</p>

# Wireframes

<h3 align="center">Homepage and Login</h3>
<p align="center">
<img src="https://i.imgur.com/fvJZWiU.jpg" alt="User Homepage" title="Homepage" height="400">
</p>

<h3 align="center">Blog View</h3>
<p align="center">
<img src="https://i.imgur.com/orEuHX2.jpg" alt="Blog View" title="Blog View" height="400">
</p>

<h3 align="center">New Post</h3>
<p align="center">
<img src="https://i.imgur.com/2IJQi6o.jpg" alt="New Post" title="New Post" height="400">
</p>

# App Screenshots
<h3 align="center">Homepage</h3>
<p align="center">
<img src="https://i.imgur.com/oRS7zNl.png" height="400">
</p>

<h3 align="center">Blog Post</h3>
<p align="center">
<img src="https://i.imgur.com/O8Ph9Q3.png" height="400">
</p>

<h3 align="center">Comments</h3>
<p align="center">
<img src="https://i.imgur.com/906hUtY.png" height="400">
</p>

# Technologies and Workflow
* Express using `calm-api`
* React using `react-auth-template`
* Node
* MongoDB
* Mongoose
* CURL for API testing
* Heroku for API deployment

# Future Plans
These are goals requested by my client that will be implemented for the beta:

* As a signed in user, I would like to follow another user
* As a signed in user, I would like to receive emails about my subscription
* As an unregistered user, I would like to see comments on those blog posts.

Unsolved problems include editing a comment, and editing a user profile. These will be resolved in future iterations.
