const User = require("mongoose").model("User");

function completeLogin(request, response, user) {
	console.log("completing login");
    console.log(user);
	//request.session.user = user;
    console.log("after session ");
    
    response.cookie("userID", user._id);
    console.log("after setting cookie ");
	response.cookie("expiration", Date.now() + 86400 * 1000);
    console.log("after setting cookie ");
	response.json(user);
}
module.exports = {
    login(request, response) { 
        console.log(request.body.username);
    User.findOne({ username: request.body.username })
        .then(user => {

            console.log('user found');
            console.log(user);
            if(! user || user == null) { 
                console.log('if user null');
                console.log(request.body);
                User.create(request.body)
                .then(user => {
                    console.log('inside create then');
                    console.log(user);
                     return completeLogin(request, response, user);
                })
                .catch(error => {
                        response.status(422).json(
                Object.keys(error.errors).map(key => error.errors[key].message)
                    );
                });
                console.log('after if user null');
             }
             console.log('before calling completelogin');
            return completeLogin(request, response, user);
            console.log('after calling completelogin');
        }).catch(error => {
            response.status(401).json("user  not found");
        });

    },/*register(request, response) { 
    console.log('in register');
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
*/
logout(request, response) { 
    request.session.destroy();
    response.clearCookie("UserID");
    response.clearCookie("expiration");
    response.json(true);
},

};
