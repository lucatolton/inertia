# unblocked-sites

## About

-   This is a small web proxy for unblocking websites
-   Status: Working
-   Maintainer: Angad Tendulkar angad.tendulkar@gmail.com

## Deploy Instructions

1. Clone this repo on repl, heroku, or locally. If local, install node.js.
1. Run `npm install`
1. Run the app with `npm start`
1. By default; it should start on 0.0.0.0:8080. It will give the used address and port in the output

## How to use

1.  Enter the site address in the input box
1.  Click 'GO' or press enter
1.  It will take you to that site, unblocked!

## The config file (`config.json`)

```json
{
	"ip": "0.0.0.0",
	"port": "8080",
	"blockedHostnames": []
}
```

1. IP - The IP of the site (http://ip:port)
1. Port - The Port of the site (http://ip:port)
1.
