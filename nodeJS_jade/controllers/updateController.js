(function (updateController){
	updateController.init = function(app){
	var MongoClient = require('mongodb').MongoClient;
	
	app.post("/updcust", function (req, res) {
    var cname = req.body.custname;
    var add = req.body.address;
    MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
        var collection = db.collection("mycol2");
        collection.update({ 'custname': cname }, { $set: { 'address': add } });
        res.redirect("custlist");
		});
	});
};
})(module.exports);