# Social Network API 

This document provides an overview of how the Social Network API was created, including the technologies and steps involved in its development.

## User Story

- **As a social media startup:**
  - **I want** an API for my social network that uses a NoSQL database
  - **So that** my website can handle large amounts of unstructured data.

## Acceptance Criteria

**Given** a social network API:

- **When** the command to invoke the application is executed,
  - **Then** the server starts, and the Mongoose models sync to the MongoDB database.

- **When** API GET routes in Insomnia are opened for users and thoughts,
  - **Then** the data for each of these routes is displayed in a formatted JSON.

- **When** API POST, PUT, and DELETE routes in Insomnia are tested,
  - **Then** it is possible to successfully create, update, and delete users and thoughts in the database.

- **When** API POST and DELETE routes in Insomnia are tested,
  - **Then** it is possible to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.


## Project Setup

To create the Social Network API, follow these steps:

1. **Clone the Repository:**
   - Begin by cloning this repository to your local development environment using Git:
     ```
     git clone git@github.com:Otabek0111/SocialNetworkAPI.git 
     ```

2. **Install Dependencies:**
   - Navigate to the project directory and install the necessary dependencies using npm:
     ```
     npm install
     ```

3. **Database Configuration:**
   - Create a MongoDB database and configure the connection in the `server.js` file. You can specify the database URL and settings here.

4. **API Routes, Controllers, and Models:**
   - Implement API routes, controllers, and models as required for the project. You can find example route and controller files in the `routes/` and `controllers/` directories.

5. **Testing:**
   - Use a tool like Insomnia to test the API's functionality. Ensure that you can create, update, and delete users and thoughts, add and remove friends, and react to thoughts.

6. **Video Walkthrough:**
    - [Video Walkthrough Link]( https://watch.screencastify.com/v/jsTX8cohJhDu8ihBywj1  )

## Additional Resources

For more information about setting up and running the Social Network API, refer to the course materials and instructions provided.


# Social Network API - How It Was Created

[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-6.x-orange.svg)](https://mongoosejs.com/)
[![Moment](https://img.shields.io/badge/Moment-2.x-brightgreen.svg)](https://momentjs.com/)
[![Nodemon](https://img.shields.io/badge/Nodemon-2.x-red.svg)](https://nodemon.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green.svg)](https://www.mongodb.com/)
[![Insomnia](https://img.shields.io/badge/Insomnia-6.x-purple.svg)](https://insomnia.rest/)

## Technologies Used

- Node.js: A JavaScript runtime for server-side development.
- Express.js: A web application framework for Node.js used for routing.
- MongoDB: A NoSQL database used to store user data, thoughts, reactions, and friend lists.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- Moment: A JavaScript date library for formatting timestamps.
- Nodemon: A tool to automatically restart the server during development.
- Insomnia: A tool for testing API routes during development.
- [Add other technologies used in your project]

## Credits

This project was created by [Otabek Islomjonov](https://github.com/Otabek0111)

Thanks to Professor Roger Le and TA Charlie Puente for their help and support during this project. As well as tutor Dennis Itua for his tutoring sessions and help.

## License

This project uses the MIT License. For more information, refer to the [MIT License documentation](https://opensource.org/licenses/MIT).


