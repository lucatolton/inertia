# unblocked-sites

## About
* This is a small web proxy for unblocking websites
* Status: Working
* Maintainer: Angad Tendulkar angad.tendulkar@gmail.com

## Deploy Instructions
1. Clone this repo on repl, heroku, or locally. If local, install node.js.
1. Run `npm install`
1. Run the app with `npm start`
1. By default; it should start on 0.0.0.0:8080. It will give the used address and port in the output

# Config Instructions
* port: Change the port (e.g. 8080)
* ssl: force https (true/false) (might not work on repl.it)
* prefix: what comes before the website (e.g. (site)**/web/**_aHR0cHM6Ly9iaXRseS5jb20=_/2OFbpZx)
* localAddresses: choose the ip (e.g. 0.0.0.0)
* blockedHostnames: block a site from working
