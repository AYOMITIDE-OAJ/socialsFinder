# socialsfinder
search handles across hundreds of social networks

This app is a wrapper around [The Sherlock Project](https://github.com/sherlock-project/sherlock)

<img src="https://res.cloudinary.com/dl7q41uw0/image/upload/v1715876133/socialsfinder_olczk8.png" width="400">

## Backend Requirements
- Python >= 3.9.0
- Linux / MacOS _(not tested on Windows)_

By default, the dependencies are managed with pip.

From `./backend/app/` you can install all the dependencies with:

```console
$ pip install -r requirements.txt
```

Create a virtual environment from the requirements.txt (or installed globally).

Then you can start your local server with `uvicorn app.main:app`

It will be running on localhost ie `127.0.0.1`

### Frontend Rquirements

- Node.js (with `npm`)

You will need to download the build of the frontend. 

To do this, you will need to cd into frontend and npm install, npm run build, and npm start to run locally
```
cd backend
uvicorn app.main:app --reload
```
## 2. Development URLs

Automatic Interactive Docs (Swagger UI): https://localhost/docs

## 3. Freezing Requirements

`pip freeze > requirements.txt`

