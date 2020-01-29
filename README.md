# Dockerize a node-js app

Learn how to use docker and dockerize a simple nodejs app for backend.

## How to Use

- You can download docker dekstop from the [official page](https://docs.docker.com/install/)
- Clone this repository
- Make docker image by run this script :

```
docker build -t image_name .
```

- You can check if success by run this script : `docker images` you will see something like this :

```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
image_name          latest              023b3747f3d9        9 minutes ago       904 MB
node                8                   8eeadf3757f4        4 weeks ago         901 MB
```

- The important thing is that we need to tell docker how to map the port. And finally you can run with :

```
docker run -p 8080:3500 -d backend-app
```

Now you can access the app will run at 8080
