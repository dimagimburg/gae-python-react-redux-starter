Before starting to work on development environment:

1. Make sure in /config.json that WEBPACK_DEV_SERVER_PORT matches the port number on /client/package.json -> scripts -> start
2. Make sure that you local AppEngine server not running on same port, and running on APP_ENGINE_DEV_SERVER_PORT key in /config.json

Installation:

1. cd client
2. npm install

Run:

1. cd client
2. npm start
3. run AppEngine server (usually from root directory run command: "dev_appserver.py --admin_port=9000 --port=3001" the google AppEngine SDK should be on the PATH and again make sure port is same as APP_ENGINE_DEV_SERVER_PORT in config.json file)
4. open browser http://localhost:[[APP_ENGINE_DEV_SERVER_PORT]] (change it to your port)
5. the app should be running with no console errors and no 404s

Deploy:

1. uncomment the <!-- <link href="/static/css/app.css" type="text/css" rel="stylesheet" /> --> in admin/index.html, this file is created when webpack building for production
2. cd client
3. npm run dist
4. deploy to app engine "appcfg.py update app.yaml" (google app engine SDK should be on PATH)
