(function (addController){
	addController.init = function(app){
		var MongoClient = require('mongodb').MongoClient;
		
		app.post("/addcust", function (req, res) {
			var cname = req.body.custname;
			var add = req.body.address;
		MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
			var collection = db.collection("mycol2");
			collection.insert({ "custname": cname, "address": add }, function (err, doc) {
           if (err) {
                res.send("There is error in writing in db");
				}
            else {
				res.redirect("custlist");
				}
			}
			);

		}); 
	});
};
})(module.exports);