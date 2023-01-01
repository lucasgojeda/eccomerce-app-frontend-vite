## E-commerce App | [Demo](https://my-ecommerce-app-vite.netlify.app/)

### _virtual store application_

![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1672610405/Portafolio/English/Eccomerce%20app/1_zqsjjw.jpg)

This project was migrated from CRA to VITE, and refactored several times while i was learning new things, the commits of this repository start when the project was migrated to VITE.

This project is part of what at the beginning was a much bigger one but I decided to divide its frontend into two parts so that everything is much more orderly, easy to maintain and make changes, the project itself is an e-commerce which consists of the following parts:

- User application (e-commerce itself).
    * React js.
    * Redux toolkit (actions by using custom hooks).
- Admin/moderator application (dashboard).
    * React js.
    * Redux toolkit (actions by using custom hooks).
- Backend.
    * Node js - Express.
    * MongoDb - Mongoose.


## Installation



First install the dependencies and then we start the local server.

```sh
$ git clone https://github.com/lucasgojeda/eccomerce-app-frontend-vite.git
$ cd eccomerce-app-frontend-vite
$ npm i
$ npm run dev
```
It should be noted that we must have the following environment variable configured.

```sh
VITE_REACT_APP_API_URL= 'Backend URL'
```




