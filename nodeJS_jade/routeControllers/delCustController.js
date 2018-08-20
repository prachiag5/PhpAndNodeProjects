(function (delCustController) {
	delCustController.init = function(app){
	app.get("/delcust", function (req, res) {
		res.render("delcust", { title: "Express2 + Jade" });
	});
};
})(module.exports);