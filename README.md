# W08D04
# Code Overview
The main purpose of this repository is to social media website

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [bcrypt package](https://www.npmjs.com/package/bcrypt/)
- Install [json web token package](https://www.npmjs.com/package/jsonwebtoken/)

# Getting started
- Clone the repository
```
git clone  https://github.com/ShathaAlmansour/W08D04
```
- Install dependencies
```
cd W08D04
npm install
```
- Start the local server
```
npm run dev
```
# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

- Dotenv
  to hide our content keys

```bash
npm i dotenv
```

- Express
  to build our server

```bash
npm i express
```

- bcrypt
  to bcrypt our passwords

```bash
npm i bcrypt
```

- jsonwebtoken
  genreate tokens

```bash
npm i jsonwebtoken
```