'use strict';

/**
 * world.js is loaded by the cucumber framework before loading the step definations and feature files
 * it is responsible for setting up and exposing the driver/browser/expect/assert etc required within each step definition
 */

var fs = require('fs-plus'),
    path = require('path'),
    requireDir = require('require-dir'),
    merge = require('merge'),
    chalk = require('chalk'),
    selenium = require('selenium-webdriver'),
    proxy = require('selenium-webdriver/proxy'),
    phantomjs = require('phantomjs-prebuilt'),
    chromedriver = require('chromedriver'),
    iedriver = require('iedriver'),
    firefox = require('geckodriver'),
    expect = require('chai').expect,
    assert = require('chai').assert,
    //reporter = require('cucumber-html-reporter');
    reporter = require('../htmlReporter/index');
var findRemoveSync = require('find-remove');

var browserlogs = jsonfile.readFileSync('./support/browserLogs.json');

var edge = require('selenium-webdriver/edge');
var logging = selenium.logging;

var stepNm = null;

//---------------------------------------for browser mob---------------------------------------------
//svar bhwPort = 8081;
// var Proxy = require('browsermob-proxy').Proxy;
// //var bProxy = new Proxy({ host: 'localhost', port: bhwPort });
// var bProxy = new Proxy();

// console.log('\nbProxy : ', bProxy);

// bProxy.start([], function (ERROR, DATA) {
//     // if (err) {
//     //     console.log('\n\nerr : ', err);
//     // } else
//     //     console.log('\n\ndata : ', data);
//     console.log('\nerr : ', ERROR);
//     console.log('\ndata : ', DATA);
// });
//---------------------------------------for browser mob---------------------------------------------

global.DEFAULT_TIMEOUT = 55 * 1000; // 35 second default-changed to 55 

var SAUCE_SERVER = 'http://ondemand.saucelabs.com:80/wd/hub';
var SAUCE_USERNAME = 'rrgpneak';
var SAUCE_ACCESS_KEY = 'ebe49535-8bfe-4f52-847d-232a138c2ad9';

function logBrowserMessages(logEntries, driver, logging, scenario, cb) {
    // console.log('\n-------------------@@@@@@@@@@@@@@@@@@@@@------------------------------Start of log Entries');
    return driver.manage().logs().get(logging.Type.BROWSER).then(function (entries) {
        entries.forEach(function (entry) {
            logEntries = logEntries + entry.level.name + ': ' + entry.message + '\n';
        });
        logEntries = logEntries + "\n";

        // console.log('Browser Logs:\n' + logEntries);
        // console.log('in bw log Step Name :', step);

        browserlogs[scenario] = logEntries;
        //console.log('\nBrowserLogs :', JSON.stringify(browserlogs));
        jsonfile.writeFileSync('./support/browserLogs.json', browserlogs);
        console.log('------eol---');
        return cb();
    });
};
/**
 * create the selenium browser based on global var set in index.js
 */
function getDriverInstance() {

    //console.log('\n\nlogPrefs :', logPrefs);

    //console.log('browserName : ',browserName);
    switch (browserName || '') {

        case 'firefox': {

            driver = new selenium.Builder().withCapabilities({
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'webdriver.firefox.bin': firefox.path
            }).build();

        } break;

        case 'firefoxL': {

            driver = new selenium.Builder().withCapabilities({
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'webdriver.firefox.bin': firefox.path
            }).setProxy(proxy.system()).setFirefoxOptions({ acceptUntrustedCerts: true }).build();

        } break;

        case 'phantomjs': {

            driver = new selenium.Builder().withCapabilities({
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }).build();

        } break;

        //sauceLabs
        case 'sauce': {
            driver = new selenium.Builder().usingServer('http://' + SAUCE_USERNAME + ':' + SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    username: SAUCE_USERNAME,
                    accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    }
                    //path: chromedriver.path
                }).build();
        } break;

        case 'vm1': {
            driver = new selenium.Builder().usingServer('http://testdata1-vm1.uknorth.cloudapp.azure.com:5556/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    // username: SAUCE_USERNAME,
                    // accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    },
                    path: chromedriver.path
                }).build();
        } break;

        case 'vm2': {
            driver = new selenium.Builder().usingServer('http://testdata1-vm2.uknorth.cloudapp.azure.com:5556/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    // username: SAUCE_USERNAME,
                    // accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    },
                    path: chromedriver.path
                }).build();
        } break;

        case 'vm3': {
            driver = new selenium.Builder().usingServer('http://52.164.220.73:4444/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    // username: SAUCE_USERNAME,
                    // accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    },
                    path: chromedriver.path
                }).build();
        } break;

        case 'vmLoc': {
            driver = new selenium.Builder().usingServer('http://localhost:4444/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    // username: SAUCE_USERNAME,
                    // accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    },
                    path: chromedriver.path
                }).build();
        } break;

        case 'vmConfig': {

            console.log('\n-----In vmConfig--------Server : ', global.server, 'Port :', global.port, '\n\nhttp://' + global.server + ':' + global.port + '/wd/hub');
            driver = new selenium.Builder().usingServer('http://' + global.server + ':' + global.port + '/wd/hub')
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    // username: SAUCE_USERNAME,
                    // accessKey: SAUCE_ACCESS_KEY,
                    chromeOptions: {
                        "args": ["start-maximized"]
                    },
                    path: chromedriver.path
                }).build();
        } break;

        case 'IE': {
            console.log('in WD IE');
            driver = new selenium.Builder().withCapabilities({
                browserName: 'internet explorer',
                javascriptEnabled: true,
                acceptSslCerts: true,
                // chromeOptions: {
                //     "args": ["start-maximized"]
                // },
                path: iedriver.path
            }).build();
        } break;

        case 'EDGE': {
            console.log('in WD EDGE');
            var service = new edge.ServiceBuilder()
                .setPort(17556)
                .build();

            var options = new edge.Options();
            // configure browser options ...

            driver = edge.Driver.createSession(options, service);
        } break;

        // default to chrome
        default: {

            console.log('in default');

            var logPrefs = new logging.Preferences;
            logPrefs.setLevel(logging.Type.BROWSER, logging.Level.ALL);

            driver = new selenium.Builder().withCapabilities({
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    "args": ["window-size=1920,1080"]// ["start-maximized"]
                },
                path: chromedriver.path
            }).setLoggingPrefs(logPrefs).build();
        }

        //---------------------------------------for browser mob---------------------------------------------
        // default: {
        //     //console.log('in default');
        //     driver = new selenium.Builder().withCapabilities({
        //         browserName: 'chrome',
        //         javascriptEnabled: true,
        //         acceptSslCerts: true,
        //         chromeOptions: {
        //             "args": ["window-size=1920,1080"]// ["start-maximized"]
        //         },
        //         path: chromedriver.path
        //     }).setProxy(proxy.manual({ http: "localhost:8080" })).build();
        // }
        //---------------------------------------for browser mob---------------------------------------------

        /*  //---Appium----
        default: {
     driver = new selenium.Builder().withCapabilities({
          browserName: '',
          javascriptEnabled: true,
          acceptSslCerts: true,
          PlatformVersion: "6.0",
          platformName: "Android",
          deviceName: "Android Emulator",
          //"emulator-5554",
      }).usingServer('http://127.0.0.1:4723/wd/hub').build();
  }*/
    };

    return driver;
}

function consoleInfo() {
    var args = [].slice.call(arguments),
        output = chalk.bgBlue.white('\n>>>>> \n' + args + '\n<<<<<\n');
    console.log(output);
}

function World() {

    // create a list of variables to expose globally and therefore accessible within each step definition
    var runtime = {
        driver: null,           // the browser object
        selenium: selenium,     // the raw nodejs selenium driver
        By: selenium.By,        // in keeping with Java expose selenium By 
        by: selenium.By,        // provide a javascript lowercase version
        until: selenium.until,  // provide easy access to selenium until methods
        expect: expect,         // expose chai expect to allow variable testing
        assert: assert,         // expose chai assert to allow variable testing
        trace: consoleInfo,     // expose an info method to log output to the console in a readable/visible format
        page: {},               // empty page objects placeholder
        shared: {}              // empty shared objects placeholder
    };

    // expose properties to step definition methods via global variables
    Object.keys(runtime).forEach(function (key) {

        // make property/method avaiable as a global (no this. prefix required)
        global[key] = runtime[key];
    });

    // import page objects (after global vars have been created)
    if (global.pageObjectPath && fs.existsSync(global.pageObjectPath)) {

        // require all page objects using camelcase as object names
        runtime.page = requireDir(global.pageObjectPath, { camelcase: true });

        // expose globally
        global.page = runtime.page;
    };

    // import shared objects from multiple paths (after global vars have been created)
    if (global.sharedObjectPaths && Array.isArray(global.sharedObjectPaths) && global.sharedObjectPaths.length > 0) {

        var allDirs = {};

        // first require directories into objects by directory
        global.sharedObjectPaths.forEach(function (itemPath) {

            if (fs.existsSync(itemPath)) {

                var dir = requireDir(itemPath, { camelcase: true });

                merge(allDirs, dir);
            }
        });

        // if we managed to import some directories, expose them
        if (Object.keys(allDirs).length > 0) {

            // expose globally
            global.shared = allDirs;
        }
    };

    // add helpers
    global.helpers = require('../runtime/helpers.js');
}

// export the "World" required by cucubmer to allow it to expose methods within step def's
module.exports = function () {

    this.World = World;

    // set the default timeout for all tests
    this.setDefaultTimeout(DEFAULT_TIMEOUT);

    // create the driver before scenario if it's not instantiated
    this.registerHandler('BeforeScenario', function (scenario) {

        if (!global.driver) {
            global.driver = getDriverInstance();
        }
        driver.manage().window().maximize();

    });

    this.registerHandler('AfterFeatures', function (features, done) {

        jsonfile.writeFileSync('./support/browserLogs.json', browserlogs);

        console.log('\nglobal.reportsPath :', global.reportsPath, '\nfs.existsSync(global.reportsPath) :', fs.existsSync(global.reportsPath));

        if (global.defRep != 'no') {

            if (global.reportsPath && fs.existsSync(global.reportsPath)) {

                var reportOptions = {
                    theme: 'bootstrap',
                    jsonFile: path.resolve(global.reportsPath, global.JsonRepoName),
                    //jsonDir: global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
                    output: path.resolve(global.reportsPath, 'cucumber-report.html'),
                    reportSuiteAsScenarios: true,
                    launchReport: true,
                    ignoreBadJsonFile: true
                };
                //console.log('\n\n\n\nreportOptions :', reportOptions);

                reporter.generate(reportOptions);
            }
        }

        //console.log('global.repoClr Flag : ', global.repoClr);
        if (global.repoClr == 'clr') {
            var remResult = findRemoveSync(global.reportsPath, { extensions: ['.json'] });
            console.log('\n\nJson Reports cleared Successfully', '\nJson remResult : ', remResult, '\n\n--------End of Execution--------');
        }

        if (PARALLEL == "true") {
            console.log('featureConfig :', featureConfig);
            var remFeatureConfig = findRemoveSync('./support/', { files: featureConfig });
            console.log('\n\nJson Configs cleared Successfully', '\nJson remFeatureConfig : ', remFeatureConfig, '\n\n--------End of Execution--------');
        }

        // var c2;
        // if (suite != null) {
        //     if (suite == "stockton") {
        //         c2 = jsonfile.readFileSync('./support/config.json');
        //         var filePath = './support/config_stockton.json';
        //         jsonfile.writeFileSync(filePath, c2);
        //         console.log(suite, ' config Updated');
        //     }
        // } else {
        //     c2 = jsonfile.readFileSync('./support/config.json');
        //     var filePath = './support/config.json';
        //     jsonfile.writeFileSync(filePath, c2);
        //     console.log('Default config Updated');
        // }

        done();
    });

    // executed after each scenario (always closes the browser to ensure fresh tests)
    this.After(function (scenario) {
        // console.log('--Scenario :', scenario);
        var scenarioname = scenario.getName();
        console.log('Scnario Name :', scenarioname);

        logBrowserMessages('', driver, logging, scenarioname, function () {
            // console.log(browserlogs);
            //     //Do stuff
            // step.replace(/"/g, "");
            console.log('--------------------------------------------Logged');
        });

        if (scenario.isFailed()) {

            // add a screenshot to the error report
            return driver.takeScreenshot().then(function (screenShot) {

                scenario.attach(new Buffer(screenShot, 'base64'), 'image/png');

                return driver.close().then(function () {
                    return driver.quit();
                });
            });
        }
        else {
            return driver.close().then(function () {
                return driver.quit();
            });
        }
    });
};