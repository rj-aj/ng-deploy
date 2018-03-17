const User = require("mongoose").model("User");

function completeLogin(request, response, user) {
	console.log("completing login");

	request.session.user = user.toObject();
	delete request.session.user.password;

	response.cookie("userID", user._id.toString());
	response.cookie("expiration", Date.now() + 86400 * 1000);
    
	response.json(user);
}
module.exports = {
    login(request, response) { 
    User.findOne({ username: request.body.username })
        .then(user => {
            if(!user) { throw new Error(); }

            return User.validatePassword(request.body.password, user.password)
                .then(() => {
                    completeLogin(request, response, user);
                });

        }).catch(error => {
            response.status(401).json("email/password combo not found");
        });

},
register(request, response) { 
    User.create(request.body)
        .then(user => {
            completeLogin(request, response, user);
        })
        .catch(error => {
            response.status(422).json(
                Object.keys(error.errors).map(key => error.errors[key].message)
            );
        });
},

logout(request, response) { 
    request.session.destroy();
    response.clearCookie("UserID");
    response.clearCookie("expiration");
    response.json(true);
},
/*
getAllUsers(request, response) {
    User.find({})
        .then( (users) => {
            response.json(users);
        })
        .catch(error => console.log(error))
},

show: (request, response) => {
    User.findById(request.body).populate('surveys').exec()
        .then( (user) => {
            response.json(user);
    })
         .catch(error => console.log(error))
},
*/
};
