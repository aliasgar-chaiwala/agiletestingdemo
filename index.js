'use strict';

var path = require('path'),
    program = require('commander'),
    pjson = require('./package.json'),
    cucumber = require('cucumber');
var fs = require('fs-plus');
//var args = require('optimist').argv;

//var _env = args.env;


function collectPaths(value, paths) {
    paths.push(value);
    return paths;
}
var featureName = '';

program
    .version(pjson.version)
    .description(pjson.description)
    .option('-s, --steps <path>', 'path to step definitions. defaults to ./step-definitions', './step-definitions')
    .option('-p, --pageObjects <path>', 'path to page objects. defaults to ./page-objects', './page-objects')
    .option('-o, --sharedObjects [paths]', 'path to shared objects (repeatable). defaults to ./shared-objects', collectPaths, ['./shared-objects'])
    .option('-b, --browser <path>', 'name of browser to use. defaults to chrome', /^(chrome|firefox|phantomjs|sauce|IE|firefoxL|EDGE|vm2|vmLoc|vmConfig|vm1)$/i, 'chrome')
    .option('-r, --reports <path>', 'output path to save reports. defaults to ./reports', './reports')
    .option('-t, --tags <tagName>', 'name of tag to run')
    .option('-f, --featureFile <path>', 'a specific feature file to run')
    .option('-e, --env <environment>', 'environment for test')
    .option('-k, --serv <server>', 'server name')
    .option('-j, --port <serverPort>', 'server port')
    .option('-c, --clr <flag>', 'flag to clear json reports')
    .option('-d, --def <flag>', 'flag to decide to generate default report')
    .option('-g, --grid <flag>', 'flag to decide to generate multiple configs for parallel Exec')
    // .option('-d, --suite <suite>', 'setup config json as per required <suite>')

    .parse(process.argv);

program.on('--help', function () {
    console.log('  For more details please visit https://github.com/john-doherty/selenium-cucumber-js#readme\n');
});

global.jsonfile = require('jsonfile');

global.repoClr = program.clr;

global.suite = null;

console.log('program.par :', program.grid);
global.PARALLEL = program.grid;


// global.suite = null;
// console.log('\nglobal.suite bef: ', suite);
// if (program.suite == "undefined") {
//     global.suite = null;
// } else {
//     global.suite = program.suite;
// }

global.server = program.serv;
global.port = program.port;

console.log('\n-------------Server : ', global.server, 'Port :', global.port);
//console.log('\nglobal.suite aft: ', suite);

global.config = jsonfile.readFileSync('./support/config.json');
global.HTML = jsonfile.readFileSync('./support/html.json');

//console.log('global config value in : Index.js', config);

console.log('\nEnvironment Passed : ', program.env);
global.ENVIRONMENT = program.env;

global.defRep = program.def;

// store browserName globally (used within world.js to build driver)
global.browserName = program.browser;

// used within world.js to import page objects
global.pageObjectPath = path.resolve(program.pageObjects);

// used within world.js to output reports
global.reportsPath = path.resolve(program.reports);

// used within world.js to import shared objects into the shared namespace
global.sharedObjectPaths = program.sharedObjects.map(function (item) {
    return path.resolve(item);
});

// rewrite command line switches for cucumber
process.argv.splice(2, 100);

// allow a specific feature file to be excuted
if (program.featureFile) {
    process.argv.push(program.featureFile);

    var featurePath = program.featureFile;
    console.log('\nfeature path : ', featurePath);
    featureName = featurePath.replace(".\\features\\", "").replace(".feature", "").replace("./features/", "") + "_";
    // featureName = featurePath.replace("features", "").replace("/", "").replace(".\\features\\", "").replace(".feature", "").replace("./features/", "").replace("Flows/", "").replace("Flows\\", "") + '_';
    console.log('\nfeatureName : ', featureName);
}

// var base = "{}";
// base = JSON.parse(base);
global.JsonRepoName = featureName + 'cucumber-report.json';

if (PARALLEL == "true") {


    var baseConfig = jsonfile.readFileSync('./support/config.json');

//------------------setting "featureConfig" globally to be used in all step files for input data--------------
    global.featureConfig = featureName + 'config.json';

    jsonfile.writeFileSync('./support/' + featureConfig, baseConfig);

    var featConfig1 = jsonfile.readFileSync('./support/' + featureConfig);

//------------------setting "filePath" globally to be used in all step files for input data--------------
    global.filePath = './support/' + featureConfig;

} else {
    global.featureConfig = 'config.json';
    global.filePath = './support/config.json';
}

console.log('Global Config :', featureConfig, '\n Global ConfigPath :', filePath);

// var c1 = null;

// if (suite != null) {
//     if (suite == "stockton") {
//         console.log('config loaded for ', suite);
//         c1 = jsonfile.readFileSync('./support/config_stockton.json');
//         var filePath1 = './support/config.json';
//         jsonfile.writeFileSync(filePath1, c1);
//     }
// } else {
//     console.log('default config loaded');
//     c1 = jsonfile.readFileSync('./support/config.json');
//     var filePath1 = './support/config.json';
//     jsonfile.writeFileSync(filePath1, c1);
// }

// add switch to tell cucumber to produce json report files
process.argv.push('-f');
process.argv.push('pretty');
process.argv.push('--format');
 process.argv.push('rerun:@rerun.txt');
process.argv.push('-f');
process.argv.push('json:' + path.resolve(__dirname, global.reportsPath, featureName + 'cucumber-report.json'));
console.log('\nJson report path : ', 'json:' + path.resolve(__dirname, global.reportsPath, featureName + 'cucumber-report.json'));
//process.argv.push('json:' + path.resolve(__dirname, global.reportsPath, program.featureFile + '_cucumber-report.json'));

// add cucumber world as first required script (this sets up the globals)
process.argv.push('-r');
process.argv.push(path.resolve(__dirname, 'runtime/world.js'));

// add path to import step definitions
process.argv.push('-r');
process.argv.push(path.resolve(program.steps));

// add tag
if (program.tags) {
    process.argv.push('-t');
    process.argv.push(program.tags);
}

// add strict option (fail if there are any undefined or pending steps)
process.argv.push('-S');

//
// execute cucumber
//
var cucumberCli = cucumber.Cli(process.argv);

global.cucumber = cucumber;

cucumberCli.run(function (succeeded) {
    var code = succeeded ? 0 : 1;

    function exitNow() {
        process.exit(code);
    }

    if (process.stdout.write('')) {
        exitNow();
    } else {
        // write() returned false, kernel buffer is not empty yet...
        process.stdout.on('drain', exitNow);
    }
});
