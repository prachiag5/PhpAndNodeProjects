(function (controllers) {
	var newCustController = require("./newCustController");
	var updateCustController = require("./updateCustController");
	var delCustController = require("./delCustController");
	var listCustController = require("./listCustController");
	
	controllers.init = function(app){
		newCustController.init(app);
		updateCustController.init(app);
		delCustController.init(app);
		listCustController.init(app);
	};
	
})(module.exports);