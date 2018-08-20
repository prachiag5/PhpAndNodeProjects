(function (deleteController){
	deleteController.init = function(app){
	var MongoClient = require('mongodb').MongoClient;
	
	app.post("/delcust", function (req, res) {
    var cname = req.body.custname;
    MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
        var collection = db.collection("mycol2");
        collection.remove({ 'custname': cname }, function (err) {
            res.send((err === null) ? { msg: 'Record Deleted' } : { msg: 'error: ' + err });
			});
        });
	});	
};
})(module.exports);