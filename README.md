# Nikkl Website

## Prerequisites

### Tailwind CLI

Documentation - [TailwindCSS](https://tailwindcss.com/docs/installation)

Run -
1. npm install -D tailwindcss
2. npx tailwindcss init

## Plugins

Run -
1. npm i @tailwindcss/aspect-ratio

## File structure

/docs is the where github pages serves the site files.

/theme is the where all the build files are.

To run the build files, go in the /theme file and run 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch'

## How to go live

1. Copy HTML files from /theme/src into /docs
2. Copy /theme/dist/output.css into /docs/dist
3. Change css paths in html files to dist/output.css
3. Push /docs changes to go live