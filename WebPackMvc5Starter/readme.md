# Webpack MVC5 Starter

This project is the base starter for webpack configured to run with:

* jquery
* bootstrap (imported from the TS file through LESS)
* typescript

The site loads the basic asp.net starter pages

## 3 npm script commands

* build-dev (dev mode includes source maps for debug)
* build-prod (produces compact bundles for production)
* start-dev-watch (dev mode + keeps running and watching for changes)

dev is configred to include source maps to allow debugging

prod mode uglifies and compresses down and wot not

install visual studio plugin:

https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner

to allow easy access to run the modes

## Configuration

* App folder contains typescipt and website content
* App_Dist contains webpack bundles
* Configured for multiple entry points layout, admin, order central for a multipage application

