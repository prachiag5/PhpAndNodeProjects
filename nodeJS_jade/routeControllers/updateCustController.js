(function (updateCustController) {
	updateCustController.init = function(app){
		app.get("/updcust", function (req, res) {
		res.render("updcust", { title: "updating customer + Jade" });
	});
};
})(module.exports);