import webapp2
from google.appengine.ext.webapp import template


class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_params = {}
        html = template.render("client/dist/templates/admin/index.html", template_params)
        self.response.out.write(html)

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
