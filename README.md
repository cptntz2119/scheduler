# Interview Scheduler
This is an interview scheduling app using the latest tools and techniques, I build and test a React application that allows users to book and cancel interviews. I combine a concise API with a WebSocket server to build a realtime experience, the instructions, initial structure and database created by Lighthouse Labs.

It is a single page application (SPA). Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests are used through the development of the project.

## Final Product

<img width="1726" alt="Screen Shot 2022-03-30 at 4 59 41 PM" src="https://user-images.githubusercontent.com/95147931/160952392-b921eb2a-4684-45d1-8401-60fefaf06687.png">
<img width="1723" alt="Screen Shot 2022-03-30 at 4 59 51 PM" src="https://user-images.githubusercontent.com/95147931/160952407-5c566b04-4fdb-4d9d-8db7-ada5c3c89acf.png">



## Setup

Install dependencies with `npm install`.

## Dependencies
- Axios
- Classnames
- Fsevents
- Normalize.css
- React
- React-dom
- React-scripts
- react-hooks-testing-library
- react-scripts

## Running Webpack Development Server

```sh
npm start
```
## API server Dependencies
- body-parser
- cors
- dotenv
- express
- helmet
- pg
- socket.io
- ws

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
