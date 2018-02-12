var options = { proxy: 'http://localhost:8080' };
var ZapClient = require('zaproxy');
var filePath = './Search.context';
var zaproxy = new ZapClient(options);
// zaproxy.core.sites(function (err, resp) {
//     resp.sites.forEach(function (site) {
//         // do something with the site 
//     });
// });

// zaproxy.context.contextList(function (err, filePath){
//     console.log(filePath)
// })

zaproxy.context.importContext(filePath, function (err, resp) {
    resp.forEach(function (site) {
        // do something with the site 
    });
});