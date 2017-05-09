var UserViewModel = require("../../shared/view-models/user-view-model");

var dialogsModule = require("ui/dialogs");

var frameModule = require("ui/frame");
var page;
var email;

var user = new UserViewModel({
    email: "user@nativescript.org",
    password: "password"
});

exports.loaded = function(args) {
    page = args.object;
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
        console.log('---------------- iOS here man... ----------------');
    } else {
        console.log('---------------- Android here man...----------------');
    }
    page.bindingContext = user;
};

exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/list/list");
        });
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
