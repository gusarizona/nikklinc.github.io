# nikklinc.github.io

/docs is the where github pages serves the site files.

/theme is the where all the build files are.

To run the build files, go in the /theme file and run 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch'

To go live:

1. Copy HTML files from /theme/src into /docs
2. Copy /theme/dist/output.css into /docs/styles
3. Change css path in html files in /docs to css/output.css
3. Push /docs changes to go live