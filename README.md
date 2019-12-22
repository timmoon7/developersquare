# DevSquare

> Social network for developers
> This is a MERN stack application from the "MERN Stack Front To Back". It is a small social network app that includes authentication, profiles and forum posts.

> Technologies

- Backend API: Node.js & Express
- Authentication: JWT
- Frontend: React with Redux
- Database: MongoDB

## Url on Heroku

https://devsquare.herokuapp.com/

## Quick Start

```
# change default.json file in config folder

# this file is located in config/default.json

# add uri of your mongodb connection for example
 "mongoURI": "mongodb+srv://username:password@servername.mongodb.net/test?retryWrites=true&w=majority"

# add githubClientId & githubSecret (you can find them from github developer settings)
  "githubClientId": "aaaaaaaaaaaaaa",
  "githubSecret": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
```

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

## App Info

### Author

Tim Moon

### Version

1.0.0

### License

This project is licensed under the MIT License
