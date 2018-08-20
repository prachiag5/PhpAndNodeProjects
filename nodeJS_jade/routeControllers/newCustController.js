(function (newCustController){
	
	newCustController.init = function(app){
		app.get("/newcust", function (req, res) {
			res.render("newcust", { title: "Add New customer + Jade" });
});
	};
})(module.exports);