var http = require('http'),
    express = require('express'),
    app = express(),
    port = process.env.PORT;

// The SalesOrder service requires authentication
var username = 'GW@ESW',
    password = 'ESW4GW';

var sapgw = {   host: 'gw.esworkplace.sap.com',
                headers: { 'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64') }
            };

// Action: Proxy an incoming (ie. from the user's browser) request to the SAP Gateway
function proxy(user_request, user_response) {

  // We're proxying calls, so copy the path from the user request
  sapgw.path = user_request.url;

  // Use a client request to call SAP Gateway
  http.get(sapgw, function (sapgw_response) {

    // Include a content type in the response header
    user_response.header('Content-Type', 'application/atom+xml;type=feed');

    // In Node, http responses are streams. You can just pipe the response data from the Gateway to the user.
    sapgw_response.pipe(user_response);
  });
}


// Action: perform a redirect to the home page (index.html)
function home(req, res) {
  res.redirect('/index.html');
}

// Now we will set up the routing for the server...

// If you just call the server (root), redirect to homepage
app.get('/', home);

// Requests starting '/sap/' are proxied to the SAP Gateway
app.get('/sap/*', proxy);

// Look if the request is for a static file in the public directory
// this is where the client side html, css, js and SAPUI5 resources are located
app.use(express.static(__dirname + '/public', { maxAge: 120000 }));


// Routes are set up,
// Now start the app server...
app.listen(port);

console.log('Server started on port ' + port);
