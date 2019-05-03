// ****************************************
// Define application
// ****************************************

// Required modules
const express = require("express"); // Express is a NodeJS application framework
const app = express(); // We'll use the application framework below
const hbs = require('hbs'); // Handlebars (hbs) is a template engine for Express
const path = require("path"); // Needed variable below

// View engine setup
app.set("views", path.join(__dirname, "views")); // Define the views directory
app.set("view engine", "hbs"); // Set Handlebars as the template engine
app.use(express.static(__dirname)); // Register the root directory in the application, so it can look inside
app.use(express.static(path.join(__dirname, "public"))); // Register the public directory in the application, so it can look inside
hbs.registerPartials(path.join(__dirname, "views/partials")); // Automatically load the partials views


// ****************************************
// Custom helpers
// ****************************************

// The if statement need to be more powerful as the one provided by Handlebars
hbs.registerHelper('if_eq', function (a, b, opts) {
	if (a == b) {
		return opts.fn(this);
	} else {
		return opts.inverse(this);
	}
});

// ****************************************
// Define routes
// ****************************************

// Home route
app.get("/", (req, res) => {
	res.render("index", { currentPath: '/' }); // Render the view, passing variables
});

// Test route
app.get("/test", (req, res) => {
	let test = 'Hello test'; // Define a local variable
	res.render("test", { currentPath: '/test' }); // Render the view, passing variables
});


// ****************************************
// Launch the server
// ****************************************
app.listen(5000, function () {
	console.log('Server listening on http://localhost:5000'); // Show the server url with the port in the console
});
