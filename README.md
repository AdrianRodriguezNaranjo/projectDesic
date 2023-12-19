# Project Desic
## Introduction
This application aims to provide users with efficient and up-to-date information about the local bus company, thereby improving accessibility and the overall travel experience. We aspire to expand the application's utility to benefit users of public transportation services across the Canarias region, including other type of public transportation.
### Development for
We want to create an essential tool for the general population interested in accessing accurate and timely information about public transportation in Gran Canaria. This project seeks to simplify and enhance user experiences when interacting with local bus services.
### Brief Idea
The core of the project lies in creating a mobile application that leverages technology to provide users with detailed information about local bus company services. From schedules and routes, the application aims to optimize travel planning and decision-making for users.
## Diagrams
### ERD Diagram
![image](https://github.com/Naidr/projectDesic/assets/118465343/cafd3938-1331-4eb2-9244-93874111c7f9)
![image](https://github.com/Naidr/projectDesic/assets/118465343/15d04fbd-afd8-4920-b3b6-caf0c91e0999)
### Relational Diagram
![image](https://github.com/Naidr/projectDesic/assets/118465343/9da9d2ce-65a5-4f54-a448-9f310420094c)
### Class Diagram
![image](https://github.com/Naidr/projectDesic/assets/118465343/fc39214e-51ce-429f-98ab-517d05b8783a)
## User Requirements
### Admin
Manages bus lines by creating, deleting, and modifying them.
Manages stops by creating, deleting, and modifying them.
Manages schedules by creating, deleting, and modifying them.
### Client
Register
Consults data on existing bus line, stops and schedules.
## Use cases
### VisualParading
![image](https://github.com/Naidr/projectDesic/assets/118465343/fc55b48e-f331-4c61-8f9f-2aba1e3b0e32)
## Interfaces
### Figma
[Figma](https://www.figma.com/file/8W3EU9eOohMVPDF4qeRto2/Desic?type=design&node-id=0-1&mode=design&t=vNjERkJd6lWnT8pg-0)
### Usuability
The use of these colors in the app is because they are the same colors as the bus company's branding. Therefore, I am trying to incorporate a corporate style into the project.


![image](https://github.com/Naidr/projectDesic/assets/118465343/726f64ea-d771-4acc-afc3-22abd6d34c34)


As observed in the previous image, it features a simple design aimed at avoiding clutter.
It includes persistent menus throughout the interface, enhancing user navigation and ensuring easy access to the desired features.


![image](https://github.com/Naidr/projectDesic/assets/118465343/73d6ae07-5c97-4d07-8892-8db60e9238c7)

I have some validation.
Secure handling of user information.
I encrypted the password and used a bearer token to transfer the information.
## Manuals
### Prerequisites
- Installed Node.js
- Relational MySQL database
- npm package manager
### Installation Steps
1. Clone the server repository from GitHub:
   ```bash
   git clone https://github.com/Naidr/projectDesic.git
2. Navigate to the server directory:
   ```bash
   cd projectdesic
3. Install dependencies:
   ```bash
   npm install
4. Configure the .env files
5. Start the server in the backend and frontend:
   ```bash
   npm start
## Test for Backend
1. Go to the backend
   ```bash
   cd backend
2. Run the Test
   ```bash
   npm test
### Result:
![image](https://github.com/Naidr/projectDesic/assets/118465343/8bdeee81-edbc-4f67-9d57-b871d5462a2b)
## Tecnologies
* ReactJS: React is a JavaScript library for building user interfaces. It is used on the client side to create interactive user interfaces. With React, you can develop reusable components and efficiently manage the UI state. React works in the browser and communicates with the server through HTTP requests or other communication methods such as sockets.
* Express.js: Express.js is a web application framework for Node.js, used to create servers and web applications. You can use Express.js to define routes, handle HTTP requests and responses, and organize your application efficiently. In the context of a full web application, Express.js typically handles client requests, performs operations in the database if necessary, and then sends a response back to the client.
* Sequelize: Sequelize is a Node.js library used to interact with SQL databases, such as MySQL. You can define data models, execute queries to the database, and manage relationships between tables using Sequelize. In the context of Express.js, Sequelize is often integrated as middleware to interact with the database from Express routes.
* MySQL: MySQL is a relational database that uses the SQL language to manage and manipulate data. Sequelize handles interactions with MySQL in your application, making it easy to create, read, update, and delete data.
## Tecnologies comparation
### React.js:
#### Advantages:
* Virtual DOM: React uses a Virtual DOM that improves performance by minimizing direct manipulations in the DOM, leading to greater efficiency.
* Component reusability: React's component-based architecture facilitates code reuse and the construction of modular interfaces.
* Large community and support: React has an active community with a wide variety of libraries and resources available.
#### Disadvantages:
* Learning curve: It may have an initial learning curve, especially for those new to the component-based programming paradigm.
* Tool decisions: Being only a library for the user interface, additional decisions must be made regarding routing, state management, etc.
### Node.js (Runtime environment for JavaScript on the server):
#### Advantages:
* JavaScript on both sides: The ability to use JavaScript on both the client and server sides facilitates synchronization between the frontend and backend.
* Asynchronous handling: Node.js is designed to be non-blocking and handle multiple connections simultaneously, which is beneficial for scalable applications.
* NPM (Node Package Manager): NPM is a robust package management system that facilitates the integration of third-party modules and libraries.
#### Disadvantages:
* Single-threaded: Although asynchrony is an advantage, the fact that Node.js is single-threaded can be a drawback for certain CPU-intensive tasks.
## Repositories
[GitHub](https://github.com/Naidr/projectDesic.git)
## Planification
I started on November 13, so my planning was a little messy. I tried to use the agile method, but I had a lot to do in only one month. Initially, I was going to plan, but the development issues took more time than I expected. This type of planning is very effective, however, I didn't have enough time to finish all parts of the project.
## Conclusion
Although I only worked on this project for a month, I learned a lot about the development of an app. After this time, I realized that I am slower than I thought, so for the next projects, I know which parts I need to focus on more.
