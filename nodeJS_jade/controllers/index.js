(function (controllers) {
	var addController = require("./addController");
	var updateController = require("./updateController");
	var deleteController = require("./deleteController");
	//var listController = require("./listController");
	
	controllers.init = function(app){
		addController.init(app);
		updateController.init(app);
		deleteController.init(app);
		//listController.init(app);
	};
	
})(module.exports);