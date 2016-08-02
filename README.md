# Satellite Strategy

Satellite State of Play - a strategy document on satellite imagery

This site was created from the viewpoint of the development community, but offers a general overview of current market dynamics. This knowledge product is an adaption of a World Bank Group Knowledge Product See original version, licensed under Creative Commons Attribution License.

All code is MIT licensed, and the text content is CC-BY. Please feel free to send edits and updates via Pull Requests.

## Development environment
The development environment is the same for both parts and has the following dependencies:

- Node (v4.2.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)

> The versions mentioned are the ones used during development. It could work with newer ones.

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

### Getting started
```
$ npm run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`  
The system will watch files and execute tasks whenever one of them changes.  
The site will automatically refresh since it is bundled with livereload.

#### Adding new pages
Any top level page added should be directly inside `app/`, its name prefixed with a number to set order, and have the following front matter (example):
```
layout: article
id: introduction
permalink: introduction/

title: Introduction
```
All the top level pages will show up in the main menu. The `title` is used for the link text.

For the sublevel sections a collection should be created in `_config.yml` whose name matches to top-level page `id`:
```
collections:
  introduction:
    output: false
```
It is important the the `output` is set to `false` because these documents will be loaded as sections of the top-level page.

In the collection's folder (in the example's case `_introduction`) the files should also be prefixed with a number to ensure order.
Each document should have the following yaml front matter information:
```
layout: article
id: beyond

title: Beyond optical sensors
```

**Example file structure:**
```
/
  10_index.md
  20_introduction.md
  _introduction/
    210_new.md
    220_beyond.md
```

## Deployment
The .travis.yml file enables the usage of [Travis](http://travis.org) as a test and deployment system.  
In this particular case, Travis will be looking for any changes to the repo and when a change is made to the `master` branch, Travis will build the documentation and deploy it to the `gh-pages` branch.

## Linting
Code follows the `semistandard` code style and should be linted.
- `npm run lint` - will run linter and warn of any errors.
