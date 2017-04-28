var UserViewModel = require("../../shared/view-models/user-view-model");
var frameModule = require("ui/frame");
var page;
var email;

var user = new UserViewModel();

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    user.login();
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
