# kcdweb-generator

Astro project (with tailwindcss) to generate static files for kcd website hosted on GitHub Pages as
www.kidzcandurban.com

{build: } settings in astro.config.mjs customised:

- output build to /dist folder
- output css to /dist/css folder with format index[hash].css
- output routes to /dist/views folder with format [route].html
- use image files with webp/avif/jpg formats from the /public folder
- output images in public folder to /dist/images during build

npm run build produces all files for the www.kidzcandurban.com site - with ONE WIP ISSUE - that is that the <head> in /dist/index.html points to css files at href="../css/index[hash].css" and this path is wrong - should have only one period in the path i.e. href="./css/index[hash].css".

After editing/fixing this one issue in /dist/index.html all files in /dist can be copied "as is" to the kcd website repo for commit/deploy to Github Pages.

Or the /dist folder can be uploaded to netlify for a manual deploy to kcdweb-generator.netlify.app.  
Don't want to auto-deploy to Netlify because of the current WIP build error.

Reason for having two repositories for kcd website files is that I would prefer a separate repo to learn more about Astro and to test updates in a "live deploy" not just a localhost environment, to run tests on mobile, screen readers, etc before making changes to the "real" site at www.kidzcandurban.com
