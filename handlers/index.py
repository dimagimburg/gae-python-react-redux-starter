import webapp2
from google.appengine.ext.webapp import template
from utils import constants


class IndexHandler(webapp2.RequestHandler):
    def get(self):

        if constants.ENVIRONMENT == 'development':
            host = constants.WEBPACK_DEV_SERVER_HOST
            port = constants.WEBPACK_DEV_SERVER_PORT
            requests_host = host + ":" + port

        else:
            # production
            requests_host = ""

        template_params = {
            "requests_host": requests_host
        }

        html = template.render("templates/admin/index.html", template_params)
        self.response.out.write(html)

app = webapp2.WSGIApplication([
    ('/', IndexHandler)
], debug=True)
