DO NOT OPEN REPOSITORY UNTIL CLEARANCE FROM LEGAL DEPT.


# Satellite Strategy
Satellite State of Play - a strategy document on Satellite imagery

This site was created from the viewpoint of the development community, but offers a genera overview of current market dynamics.

All code is MIT licensed, and the text content is public domain (CC0). Please feel free to send edits and updates via Pull Requests.

## Development environment

To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Gulp ( $ npm install -g gulp )

After these basic requirements are met, run the following commands in the website's folder:

```
$ npm install
```

There are two commands, both run via npm.

- `npm run build` or `gulp build` or `gulp` - clean & build everything and put it into dist folder
- `npm run serve` or `gulp serve` - serve the pages and utilize live reload on changes to styles, fonts, images, scripts and HTML.

## Editing Copy

You can access text files in `app/content`. All files should be in [github-flavored markdown](https://help.github.com/articles/github-flavored-markdown/). To add a new section, create a new markdown file in `app/content` and add a corresponding build script in `app/app.html`.

For example, to create a file on market opportunities, add a file called `app/content/opportunities.md`. Then modify `app/app.html` with the following code at the location where your copy should go.

```(html)
<!-- build:opportunities -->
<!-- endbuild -->
```

Note: the filename (minus `.md`) should be what comes after `build:`.

## Assets Structure
should be in [github-flavored markdown](https://help.github.com/articles/github-flavored-markdown/).
```
app/assets/
|
+- scripts/: The user scripts
|  |
|  +- config/: configuration files (see configuration section)
|
+- styles/: The sass styles
|
+- vendor/: Any third-party script that can't be required()
|
+- graphics/: Images for the site divided in:
|  |
|  +- layout/: Images for layout elements (Ex: background images)
|  +- meta/: Images for the meta tags (Mostly icons and facebook images)
|  +- content/: Content image
|
```

### How scripts are built

The script build, which uses `browserify`, outputs two js files: `bundle.js` and
`vendor.js`:
 - `bundle.js`, created by the `javascript` task in deployment and by
   `watchify` during development, contains all the app-specific code:
   `app/scripts/main.js` and all the scripts it `require`s that are local to
   this app.
 - `vendor.js`, created by the `vendorBundle` task, contains all the external
   dependencies of the app: namely, all the packages you install using `npm
   install --save ...`.

## Travis for testing and deployment
The .travis.yml file enables the usage of [Travis](http://travis.org) as a test and deployment system. In this particular case, Travis will be looking for any changes to the repo and when a change is made to the `master` branch, Travis will build the project and deploy it to the `gh-pages` branch.

## semistandard for linting
We're using [semistandard](https://github.com/Flet/semistandard) for linting.

- `npm run lint` - will run linter and warn of any errors.

There are linting plugins for popular editors listed in the semistandard repo.
