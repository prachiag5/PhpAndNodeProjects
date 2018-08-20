(function (listCustController) {
	listCustController.init = function(app){
		var data = "";
		var htmldata = "";
		var MongoClient = require('mongodb').MongoClient;
		
		app.get("/custlist", function (req, res) {
		htmldata = htmldata + "</table>";
		res.send(htmldata);
		});
		MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
    //console.log("Connecting to server");
    if (!err) {
        var collection = db.collection("mycol2");
        //console.log("We are connected");
        //console.log("database",db);
        var cursor = collection.find();
        data = "<table style='border: 0px solid grey;color:Red;margin-left:30px;font-size:20px;width:50%'>";
        data = data + "<th>Customer Name</th><th>Address</th>";
        cursor.each(function (err, doc) {
            if (doc) {
                if (err) {
                    console.log(err);
                } else {
                    //console.log('Fetched: Customer Name : ', doc.custname, "Address ", doc.address);
                    data = data + "<tr>";

                    data = data + "<td style='border: 1px solid grey'>";
                    data = data + doc.custname + "";
                    data = data + "</td>";

                    data = data + "<td style='border: 1px solid grey'>";
                    data = data + doc.address + "";
                    data = data + "</td>";
/*
                    data = data + "<td style='border: 1px solid grey'>";
                    data = data + doc.phone + "";
                    data = data + "</td>";*/

                    data = data + "</tr>";
                    htmldata = htmldata + data;
                    data = "";
                    //console.log(data);
                    //console.log(htmldata);
                }
            }
        });
        //htmldata = htmldata + "<table>";
        //console.log(htmldata);
		}
	});
};
})(module.exports);