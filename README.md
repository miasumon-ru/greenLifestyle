


# Green LifeStyle

It is a website related to the single building management system which offers various features such as different dashboard for user, member and admin , payment gateway, have a option to apply coupon and many others


live link : https://assignment-twelve-client-e914a.web.app/













## Features

- the international payment gateway  (stripe)
- have option to apply the coupon 
- axios and tanstack query is used to fetch the data
- jwt webtoken is used to secure api
- CRUD operation has been implemented 
- Responsive on desktop, tablet and mobile phones
- A slider with meaningful information 
- Enviromnet variables have been used to protect the firebase key and dotEnv variables to protect the mongodb credentials of the database from general people
- Dynamic routes and  private routes are implemented
- Firebase is  used to create user and login with email and password and therefore login with Google and Github
- Single building management system
- adminEmail =  miasumon.ru@gmail.com , adminPassword : miaSumon1#

## Technologies I have used 

-   React 
-   MongoDB
-   Express 
-   Node js
-   Tailwind Css
-   Firebase for authentication
-   DaisyUI , a component library


## Npm Packages

1. React Tooltip => This package is used in the navbar section to see the displayName of the logged user on Hover in user Image

2. React HookForm => It has been implemented to take the data from input field from user

3. Swiper Js => Swiper js is another amazing npm package which deals with different sliders 

4. React Helmet => React Helmet npm package is used to show the dynamic title of the every webpage of the website

5. React Awesome Reveal => This package is implemented to animate the text dynamically through slide from left to right in the title of slider and Zoom in animation in the title of every section of the home page

6. React Simple Typewriter => It has been implemented in the slider to animate certain words with infinity loops


## Run Locally

Clone the project

```bash
  git clone https://github.com/miasumon-ru/greenLifestyle.git
```

Go to the project directory

```bash
  cd assignment-twelve
```

Install dependencies For Client Side

```bash
  npm install  "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@headlessui/react": "^2.0.4",
    "@stripe/react-stripe-js": "^2.7.1",
    "@stripe/stripe-js": "^3.5.0",
    "@tanstack/react-query": "^5.40.1",
    "axios": "^1.7.2",
    "firebase": "^10.12.2",
    "google-map-react": "^2.2.1",
    "leaflet": "^1.9.4",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.4",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.11",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.51.5",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.2.1",
    "react-leaflet": "^4.2.1",
    "react-router-dom": "^6.23.1",
    "react-simple-typewriter": "^5.0.1",
    "react-toastify": "^10.0.5",
    "sort-by": "^1.2.0",
    "styled-components": "^6.1.11",
    "sweetalert2": "^11.11.1",
    "swiper": "^11.1.4"
```


Install dependencies For Server Side
 
```bash
  npm install    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.7.0",
    "stripe": "^15.10.0"
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`IMAGE_HOSTING_KEY`

`DB_USER`

`DB_PASS`

`STRIPE_SECRET_KEY`

`ACCESS_TOKEN_SECRET`

`PUBLISHABLE_KEY_FOR_STRIPE`


## Run

```bash
  For Client : npm run dev
  For Server : nodemon index.js

```
    
