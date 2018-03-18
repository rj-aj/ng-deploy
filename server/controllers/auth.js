const User = require("mongoose").model("User");

function completeLogin(request, response, user) {
    request.session.user = user.toObject();
    response.cookie("UserID", user._id.toString());
    response.cookie("expiration", Date.now() + 86400 * 1000);
    response.json(user);
}
module.exports = {
    login(request, response) { 
        //console.log(request.body.username);
    User.findOne({ username: request.body.username })
        .then(user => {
            if(! user || user == null) { 
                User.create(request.body)
                .then(user => {
                    return completeLogin(request, response, user);
                })
                .catch(error => {
                        response.status(422).json(
                Object.keys(error.errors).map(key => error.errors[key].message)
                    );
                });
             } else {
                return completeLogin(request, response, user);
             }
        }).catch(error => {
            response.status(401).json("user  not found");
        });

    },

logout(request, response) { 
    request.session.destroy();
    response.clearCookie("UserID");
    response.clearCookie("expiration");
    response.json(true);
},

};

