# Backend-Template-Express-MongoDB
## Overview
Backend-Template-Express-MongoDB is a starter template designed to help developers quickly set up a backend server using Express.js and MongoDB. The template follows a layered architecture design with 5 main layers in mind: client, authorization, api endpoint, data access, and database. It includes basic authentication routes for registering and logging in users. The authentication is made from scratch and is quite simple but helpful for learning purposes.
## Features
**Layered Architecture Design**: Promotes separation of concerns and easier maintenance.\
**Express.js**: The standard.\
**MongoDB**: NoSQL database.\
**DevContainer Support**: Includes a .devcontainer folder for easy setup in Visual Studio Code
## Getting Started
### Perequisites
* Docker
* Node.js (if not using Docker)
* MongoDB (if not using Docker)

### Installation 
1. Clone the repository:
`git clone https://github.com/JJeshua/Backend-Template-Express-MongoDB.git`
2. Install Dependencies:
`npm install`
3. Run dev server:
`npm run dev`

### Using Dev Container
If you are using Visual Studio Code, you can take advantage of the DevContainer feature for a containerized development experience:
1. **Open the repository in Visual Studio Code**
2. **Reopen in Container**: Press F1, type Dev Containers: Reopen in Container, and select it.

This will set up the development environment inside a Docker container, configured as per the .devcontainer folder.

# References

[How to create a REST API with Node.js and Express](https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/)\
[The Complete Guide To Building A REST API With Node, Express, TypeScript & MongoDB + Authentication](https://www.youtube.com/watch?v=b8ZUb_Okxro "The Complete Guide To Building A REST API With Node, Express, TypeScript & MongoDB + Authentication")
