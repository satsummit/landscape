# The Satellite Landscape Landscape

This is an exploratory overview of current and upcoming sources of data, processing pipelines, and data products. It is aimed at helping non-experts explore and harness the unfolding revolution of Earth observation, with an emphasis on understanding current capabilities and project development considerations.

## Development environment
The development environment is the same for both parts and has the following dependencies:

- Node (v4.5.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)

> The versions mentioned are the ones used during development. It could work with newer ones.

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

## Development with Docker
Since this project is very old it is simpler to have docker run it.   
This was a solution to circumvent problems from an old system.

**Build docker**
```bash
docker build -t landscape .
```

**Run docker and install the dependencies**  
Since the folder is mounted, the dependencies are installed in your computer but built for the docker architecture.
```bash
docker run -p 3000:3000 -w /app -v "$(pwd):/app" -it --name landscape landscape bash

## Now from within the container install the node and ruby deps
npm install
npm run postinstall

## Serve
npm run serve
```

**Serving the site**  
If the container already exists, you just need to start it and run the serve command.
```bash
docker start -i landscape
npm run serve
```

### Getting started
The site resides in the `app` and it is structured as a jekyll site.

```
$ npm run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`  
The system will watch files and execute tasks whenever one of them changes.  
The site will automatically refresh since it is bundled with livereload.

#### Jekyll settings
There are several config files for jekyll that are loaded according to the environment.
The production settings are in `_config.yml`. If overrides for local development are required they should be done in `_config-dev.yml`.
