import json

f = open('config.json')
config = json.loads(f.read())
f.close()

WEBPACK_DEV_SERVER_HOST = config['WEBPACK_DEV_SERVER_HOST']
WEBPACK_DEV_SERVER_PORT = config['WEBPACK_DEV_SERVER_PORT']
APP_ENGINE_DEV_SERVER_PORT = config['APP_ENGINE_DEV_SERVER_PORT']
ENVIRONMENT = config['ENVIRONMENT']
