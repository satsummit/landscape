## Editing Copy

You can access text files in `app/content`. All files should be in [github-flavored markdown](https://help.github.com/articles/github-flavored-markdown/). To add a new section, create a new markdown file in `app/content` and add a corresponding build script in `app/app.html`.

For example, to create a file on market opportunities, add a file called `app/content/opportunities.md`. Then modify `app/app.html` with the following code at the location where your copy should go.

```(html)
<!-- build:opportunities -->
<!-- endbuild -->
```