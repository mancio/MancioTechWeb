# MancioTechWeb

## My website built in React

### Structure

The menu page is manage by the switch in the App folder. All the pages are 
listed here. They are Lazy to be loaded only when necessary.

The menu folder contains buttons and icon. Avery time you add a button you
need to check:
* the switch in App.js
* add the button in the array in MenuHandler.js (careful to tag names)
* add the icon in icon folder
* add the tag name in SelectIcon.js
* add the url to push in ButtonTemplate.js

... well I know painful, but I'm studying a better way.

api keys can be stored in js files in the password folder. I strongly 
suggest saving here only not-sensible data keys, because they will be visible 
from inspect element during navigation

### Remote Web Config

Inside webserver folder you can find all the files required to allow 
page redirections for Nginx and Apache server. They are needed to let the
server find the page after refresh. React web path are artifacts able to 
mock web page redirection but the page is always the same. 
React build single page applications. The page never change only the layout
does.

### Docker

The root folder contain Dockerfile and webserver all the configuration to
pack the app in a container and run it on a Raspberry Pi.

### Raspberry PI

The PI is a little slow to load the app but is a good solution if you 
don't like to buy a webspace.
The most of the internet providers block incoming connections so to "open the door"
I suggest to use [PageKite](https://pagekite.net) to allow connection to 
Raspy from remote. It supports Https and ftp.

### NOTE

Please do not abuse using service that require an apikey. I suggest using 
your own key and often change it for better security.

you can use [this py code](https://github.com/mancio/pyReactBuildAndPub) to auto build and upload files to remote
