var express = require('express');
var app = express();
var jsonfile = require('jsonfile');
var filePath = './recordset.json';

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for database
    var config = {
        user: 'osc-admin',
        password: 'mwDUdXVyr5P2JUDubtR4',
        server: 'oscdatamigrate.database.windows.net',
        database: 'staging',
        "options": {
            "encrypt": true
        }
    };

    // connect to database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query("SELECT TABLE_NAME FROM staging.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'", function (err, tableNames) {
            if (err) {
                console.log(err);
            }

            // send records as a response
            console.log('tableNames :\n', tableNames);
        });

        request.query('select * from [demographics].[Person]', function (err, recordset) {

            if (err) {
                console.log(err);
            }

            // send records as a response
            res.send(recordset.recordsets);
            var fileObj = recordset;
            jsonfile.writeFileSync(filePath, fileObj);

        });
    });
});

var port = 5000;
var server = app.listen(port, function () {
    console.log('Server is running.. on ' + port);
    console.log('hit : localhost:' + port);
});