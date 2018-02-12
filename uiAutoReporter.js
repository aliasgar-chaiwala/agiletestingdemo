//--------------Code for HTML REPORT generation & Publishing it to slack----------------------
//var CucumberHtmlReport = require('./uiAutoReporter/index');

var reporter = require('./htmlReporter/index');

var argv = require('optimist').argv;
var fs = require('fs');
var path = require('path');
var findRemoveSync = require('find-remove');

var NodeSlack = require('node-slack');
var NodeSlackUpload = require('node-slack-upload');

var dateFormat = require('dateformat');
var jsonfile = require('jsonfile');
path = require('path');

var _env = argv.env;
var _pack = argv.pack;
var _MS = argv.ms;
var _MSVER = argv.msver;
var report;
var _feature = null;
if (argv.feat != 'undefined' || 'null') {
    _feature = argv.feat;
}


var reportTitle;
var currentDate = new Date();
var formatDate = dateFormat(currentDate, "dd/mm/yyyy");
var formatTime = dateFormat(currentDate, "HHMMss");

var status = '';

console.log('\nEnv :', _env, '\nPack : ', _pack, '\n_feature : ', _feature);

//--------------------for writing summary to json---------------------------------------------------

var slackJson = require('./reportDashboard/slack.json');
var slackJsonPath = './reportDashboard/slack.json';

//console.log('SlackJson Stringified: \n' + JSON.stringify(slackJson) + '\n\n');

function writeToSlackJson(content, fileObj, envn) {
    if (_pack == "End2End") {
        fileObj[envn].SummaryE2E.totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        fileObj[envn].SummaryE2E.totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        fileObj[envn].SummaryE2E.scenariosPassed = content.summary.scenarios.passed;
        fileObj[envn].SummaryE2E.scenariosFailed = content.summary.scenarios.failed;
        fileObj[envn].SummaryE2E.totalTime = content.summary.totalTime;
        fileObj[envn].SummaryE2E.runFor = _pack;

        if (content.summary.failed > 0) {
            fileObj[envn].SummaryE2E.status = 'NOK';
        } else {
            fileObj[envn].SummaryE2E.status = 'OK';
        }

        fileObj[envn].SummaryE2E.lastRunDate = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn].SummaryE2E.release = _MSVER;

        fileObj[envn].ReportTitleE2E = content.title;
        fileObj[envn].ReportNameE2E = report.name;
        fileObj[envn].E2ELastRun = dateFormat(currentDate, "dd/mm/yyyy");
    }
    else if (_pack.includes("Sanity")) {

        fileObj[envn].SummarySanity.totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        fileObj[envn].SummarySanity.totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        fileObj[envn].SummarySanity.scenariosPassed = content.summary.scenarios.passed;
        fileObj[envn].SummarySanity.scenariosFailed = content.summary.scenarios.failed;
        fileObj[envn].SummarySanity.totalTime = content.summary.totalTime;
        fileObj[envn].SummarySanity.runFor = _pack;

        if (content.summary.failed > 0) {
            fileObj[envn].SummarySanity.status = 'NOK';
        } else {
            fileObj[envn].SummarySanity.status = 'OK';
        }

        fileObj[envn].SummarySanity.lastRunDate = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn].SummarySanity.release = _MSVER;

        fileObj[envn].ReportTitleSanity = content.title;
        fileObj[envn].ReportNameSanity = report.name;
        fileObj[envn].SanityLastRun = dateFormat(currentDate, "dd/mm/yyyy");

    }
    else if (_pack.includes("Stockton")) {
        // fileObj[envn].SummaryStockton = content.summary;

        fileObj[envn].SummaryStockton.totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        fileObj[envn].SummaryStockton.totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        fileObj[envn].SummaryStockton.scenariosPassed = content.summary.scenarios.passed;
        fileObj[envn].SummaryStockton.scenariosFailed = content.summary.scenarios.failed;
        fileObj[envn].SummaryStockton.totalTime = content.summary.totalTime;
        fileObj[envn].SummaryStockton.runFor = _pack;

        if (content.summary.failed > 0) {
            fileObj[envn].SummaryStockton.status = 'NOK';
        } else {
            fileObj[envn].SummaryStockton.status = 'OK';
        }

        fileObj[envn].SummaryStockton.lastRunDate = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn].SummaryStockton.release = _MSVER;

        fileObj[envn].ReportTitleStockton = content.title;
        fileObj[envn].ReportNameStockton = report.name;
        fileObj[envn].StocktonLastRun = dateFormat(currentDate, "dd/mm/yyyy");

    }
    else if (_pack.includes("Bedford")) {
        fileObj[envn].SummaryBedford.totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        fileObj[envn].SummaryBedford.totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        fileObj[envn].SummaryBedford.scenariosPassed = content.summary.scenarios.passed;
        fileObj[envn].SummaryBedford.scenariosFailed = content.summary.scenarios.failed;
        fileObj[envn].SummaryBedford.totalTime = content.summary.totalTime;
        fileObj[envn].SummaryBedford.runFor = _pack;

        if (content.summary.failed > 0) {
            fileObj[envn].SummaryBedford.status = 'NOK';
        } else {
            fileObj[envn].SummaryBedford.status = 'OK';
        }

        fileObj[envn].SummaryBedford.lastRunDate = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn].SummaryBedford.release = _MSVER;

        fileObj[envn].ReportTitleBedford = content.title;
        fileObj[envn].ReportNameBedford = report.name;
        fileObj[envn].BedfordLastRun = dateFormat(currentDate, "dd/mm/yyyy");
    }
    else {
        // fileObj[envn].GenSummary.totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        // fileObj[envn].GenSummary.totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        // fileObj[envn].GenSummary.scenariosPassed = content.summary.scenarios.passed;
        // fileObj[envn].GenSummary.scenariosFailed = content.summary.scenarios.failed;

        // if (content.summary.failed > 0) {
        //     fileObj[envn].GenSummary.status = 'NOK';
        // } else {
        //     fileObj[envn].GenSummary.status = 'OK';
        // }

        // fileObj[envn].ReportTitleCom = content.title;
        // fileObj[envn].ReportNameCom = report.name;
        // fileObj[envn].ComLastRun = dateFormat(currentDate, "dd/mm/yyyy");
        // fileObj[envn].ComLastRunFor = _pack;
        //------------------------------------------------------------

        fileObj[envn][_MS].totalFeatures = content.summary.passed + content.summary.failed + content.summary.ambiguous;
        fileObj[envn][_MS].totalScenarios = content.summary.scenarios.passed + content.summary.scenarios.failed + content.summary.scenarios.ambiguous;
        fileObj[envn][_MS].scenariosPassed = content.summary.scenarios.passed;
        fileObj[envn][_MS].scenariosFailed = content.summary.scenarios.failed;

        if (content.summary.failed > 0) {
            fileObj[envn][_MS].status = 'NOK';
        } else {
            fileObj[envn][_MS].status = 'OK';
        }

        fileObj[envn][_MS].lastRunDate = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn].ComLastRun = dateFormat(currentDate, "dd/mm/yyyy");
        fileObj[envn][_MS].release = _MSVER;

        fileObj[envn].ReportTitleCom = content.title;
        fileObj[envn].ReportNameCom = report.name;
        fileObj[envn].ComLastRunFor = _pack;
    }
    fileObj[envn].Environment = content.component;
    jsonfile.writeFileSync(slackJsonPath, fileObj);
    //console.log('\n-----Slack Json updated for env :', envn, '-------');
}

//-----------------------for slack integration------------------------------

//var slackReporter = 'https://hooks.slack.com/services/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';
var _slackReporter = null;
var _message = null;
var slackUsername = null;
var _icon_emoji = null;
var _attachments = null;
//UI Automation Bot token used to upload html report over Slack
var slackToken = 'xoxb-51113602688-WSzS23zb35NLP1kSbS7hB3gF';

//initialize node slack upload object

var slackUpload = new NodeSlackUpload(slackToken);
var slackChannel = {
    channelHook: 'https://hooks.slack.com/services/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',
    //channelHook: 'https://hooks.slack.com/services/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',
    channelName: 'env-auto1-notify'
};

function setSlackChannel(environment) {
    //console.log('\nSet channel for :', environment);
    // if (environment == "qc1") {
    //     slackChannel.channelHook = "https://hooks.slack.com/services/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";
    //     slackChannel.channelName = "env-qc1";
    // }
    if (environment == "dev1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        //slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-dev1-notify";
    }
    // else if (environment == "devtest1") {
    //     slackChannel.channelHook = "https://hooks.slack.com/services/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";
    //     slackChannel.channelName = "env-devtest1";
    // }
    else if (environment == "qc2") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        //"https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-qc2-notify";
    }
    else if (environment == "demo1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-demo1";
    }
    else if (environment == "auto1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        //slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-auto1-notify";
    }
    else if (environment == "stockton1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        //slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-stockton1-notify";
    }
    else if (environment == "demo2") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-demo2-notify";
    }
    else if (environment == "staging1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-auto1-notify";
    }
    else if (environment == "bcc1") {
        slackChannel.channelHook = "https://hooks.slack.com/services/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";
        slackChannel.channelName = "env-auto1-notify";
    }
    //
    else {
        return;
    }
    //console.log(slackChannel);
}

function publishToSlack(message) {
    _slackReporter = slackChannel.channelHook ? new NodeSlack(slackChannel.channelHook) : null;

    ////console.log(_slackReporter);
    //console.log('\nMessage for slack reporting:\n' + JSON.stringify(message));

    _slackReporter.send(message);
    slackJson[_env].SlackMessageStatus = 'Sent';
    jsonfile.writeFileSync(slackJsonPath, slackJson);
    console.log('---- Messge Sent on Slack ----');
}

//-----------------------------------slack upload report------------------------------------------------------------------
function pushReportToSlack(_report) {
    slackJson[_env].SlackReportStatus = 'Uploading';
    jsonfile.writeFileSync(slackJsonPath, slackJson),
        function (err) {
            if (err) {
                console.error(err);
            }
            else {
            }
        };
    if (_pack == "End2End") {
        reportTitle = slackJson[_env].ReportTitleE2E;
    }
    else if (_pack.includes("Sanity")) {
        reportTitle = slackJson[_env].ReportTitleSanity;
    }
    else if (_pack.includes("Stockton")) {
        reportTitle = slackJson[_env].ReportTitleStockton;
    }
    else if (_pack.includes("Bedford")) {
        reportTitle = slackJson[_env].ReportTitleBedford;
    }
    else {
        reportTitle = slackJson[_env].ReportTitleCom;
    }

    slackUpload.uploadFile({
        file: fs.createReadStream(path.join(__dirname, _report.dest, _report.name)),
        filetype: 'html',
        title: reportTitle,
        initialComment: '*' + 'Report for suite run for : ' + slackJson[_env].Environment + ' on ' + dateFormat(currentDate, "dd/mm/yyyy") + '*' + '\nNote: Download report & open it in Browser',
        channels: slackChannel.channelName //config.Slack.Channels
    }, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            slackJson[_env].SlackReportStatus = 'Done';
            jsonfile.writeFileSync(slackJsonPath, slackJson);
            //console.log('\n------- Uploaded ', _report.name, ' to Slack---------');
        }
    });
}
//-----------------------------------//-----------------------------------//-----------------------------------//---------



//----------------------------------to generate cucumber html report-----------------------------
if (_pack.includes("Sanity")) {
    report = {
        dest: './reports',
        name: 'cucumber-report-sanity.html'
    }
    var reportOptions = {
        theme: 'bootstrap',
        name: 'UI Automation Report: ' + formatDate,
        //jsonFile: path.resolve(global.reportsPath, 'cucumber-report.json'),
        jsonDir: path.resolve('./reports'),//global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
        output: path.resolve('./reports', 'cucumber-report-sanity.html'),
        reportSuiteAsScenarios: true,
        launchReport: true,
        ignoreBadJsonFile: true
    };
}
else if (_feature != null) {
    var jsonRepoName = _feature + '_';//+ 'cucumber-report.json';
    //console.log('jsonRepoName : ', jsonRepoName);
    report = {
        dest: './reports',
        name: 'cucumber-report' + _feature + '.html'
    }
    var reportOptions = {
        theme: 'bootstrap',
        name: 'UI Automation Report: ' + formatDate,
        jsonFile: path.resolve('./reports', jsonRepoName + 'cucumber-report.json'),
        //jsonDir: path.resolve('./reports'),//global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
        output: path.resolve('./reports', 'cucumber-report' + _feature + '.html'),
        reportSuiteAsScenarios: true,
        launchReport: true,
        ignoreBadJsonFile: true
    };

}
else {
    report = {
        dest: './reports',
        name: 'cucumber-report.html'
    }
    var reportOptions = {
        theme: 'bootstrap',
        name: 'UI Automation Report: ' + formatDate,
        //jsonFile: path.resolve(global.reportsPath, 'cucumber-report.json'),
        jsonDir: path.resolve('./reports'),//global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
        output: path.resolve('./reports', 'cucumber-report.html'),
        reportSuiteAsScenarios: true,
        launchReport: true,
        ignoreBadJsonFile: true
    };
}

//var reportOptionsS = {
//    theme: 'simple',
//    //jsonFile: path.resolve(global.reportsPath, 'cucumber-report.json'),
//    jsonDir: path.resolve('./reports'),//global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
//    output: path.resolve('./reports', 'cucumber-report-simple.html'),
//    reportSuiteAsScenarios: true,
//    launchReport: true,
//    ignoreBadJsonFile: true
//};
//var reportOptionsF = {
//    theme: 'foundation',
//    //jsonFile: path.resolve(global.reportsPath, 'cucumber-report.json'),
//    jsonDir: path.resolve('./reports'),//global.reportsPath,//path.resolve(global.reportsPath, 'cucumber-report.json'),
//    output: path.resolve('./reports', 'cucumber-report-foundation.html'),
//    reportSuiteAsScenarios: true,
//    launchReport: true,
//    ignoreBadJsonFile: true
//};

var mustacheOptions = reporter.generate(reportOptions);
currentDate = new Date();
formatDate = dateFormat(currentDate, "dd/mm/yyyy");
mustacheOptions.title = 'UI Automation Report(v2.0) ' + formatDate + ' -' + _pack;
mustacheOptions.component = _env + '.onesc.co.uk';

//reporter.generate(reportOptionsS);
//reporter.generate(reportOptionsF);

//console.log('\n\nMustacheOptions Returned Content:' + '\n\tSummary' + JSON.stringify(mustacheOptions.summary) + '\n\tTitle : ' + mustacheOptions.title + '\n\tComponent : ' + mustacheOptions.component + '\n');

writeToSlackJson(mustacheOptions, slackJson, _env);

//-------------------related to slack publishing--------------------------------------------------------------------
slackUsername = 'UI Automation Reporter(2.0)';

var messageText;

function setSlackMessage(pack) {
    if (pack == "End2End") {
        if (slackJson[_env].SummaryE2E.status == 'OK') {
            _icon_emoji = ':ok_hand::skin-tone-3:';
        }
        else {
            _icon_emoji = ':cry:'; //':warning:';
        }
        messageText = slackJson[_env].ReportTitleE2E + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].SummaryE2E.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].SummaryE2E.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].SummaryE2E.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].SummaryE2E.scenariosFailed + '\n*Overall Status : ' + slackJson[_env].SummaryE2E.status + '*';
    }
    else if (_pack.includes("Sanity")) {
        if (slackJson[_env].SummarySanity.status == 'OK') {
            _icon_emoji = ':ok_hand::skin-tone-3:';
        }
        else {
            _icon_emoji = ':cry:'; //':warning:';
        }
        messageText = slackJson[_env].ReportTitleSanity + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].SummarySanity.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].SummarySanity.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].SummarySanity.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].SummarySanity.scenariosFailed + '\nTotal Run Time : ' + mustacheOptions.summary.totalTime + '\n*Overall Status : ' + slackJson[_env].SummarySanity.status + '*';
    }
    else if (pack.includes("Stockton")) {
        if (slackJson[_env].SummaryStockton.status == 'OK') {
            _icon_emoji = ':ok_hand::skin-tone-3:';
        }
        else {
            _icon_emoji = ':cry:'; //':warning:';
        }
        messageText = slackJson[_env].ReportTitleStockton + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].SummaryStockton.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].SummaryStockton.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].SummaryStockton.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].SummaryStockton.scenariosFailed + '\nTotal Run Time : ' + mustacheOptions.summary.totalTime + '\n*Overall Status : ' + slackJson[_env].SummaryStockton.status + '*';
    }
    else if (pack.includes("Bedford")) {
        if (slackJson[_env].SummaryBedford.status == 'OK') {
            _icon_emoji = ':ok_hand::skin-tone-3:';
        }
        else {
            _icon_emoji = ':cry:'; //':warning:';
        }
        messageText = slackJson[_env].ReportTitleBedford + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].SummaryBedford.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].SummaryBedford.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].SummaryBedford.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].SummaryBedford.scenariosFailed + '\nTotal Run Time : ' + mustacheOptions.summary.totalTime + '\n*Overall Status : ' + slackJson[_env].SummaryBedford.status + '*';
    }
    else {
        // if (slackJson[_env].GenSummary.status == 'OK') {
        //     _icon_emoji = ':ok_hand::skin-tone-3:';
        // }
        // else {
        //     _icon_emoji = ':cry:'; //':warning:';
        // }
        // messageText = slackJson[_env].ReportTitleCom + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].GenSummary.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].GenSummary.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].GenSummary.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].GenSummary.scenariosFailed + '\nTotal Run Time : ' + mustacheOptions.summary.totalTime + '\n*Overall Status : ' + slackJson[_env].GenSummary.status + '*';
        //------------------

        if (slackJson[_env][_MS].status == 'OK') {
            _icon_emoji = ':ok_hand::skin-tone-3:';
        }
        else {
            _icon_emoji = ':cry:'; //':warning:';
        }
        messageText = slackJson[_env].ReportTitleCom + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env][_MS].totalFeatures + '\nTotal Scenarios:-' + slackJson[_env][_MS].totalScenarios + '\nScenarios Passed:- ' + slackJson[_env][_MS].scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env][_MS].scenariosFailed + '\nTotal Run Time : ' + mustacheOptions.summary.totalTime + '\n*Overall Status : ' + slackJson[_env][_MS].status + '*';
    }
}

//_attachments = (report.dest + '/' + report.name);
////console.log('Attachment location _attachments :\n', _attachments);

setSlackMessage(_pack);

//var messageText = slackJson[_env].ReportTitle + '\n*' + 'Environment: *' + slackJson[_env].Environment + '\n\nTotal Features:- ' + slackJson[_env].Summary.totalFeatures + '\nTotal Scenarios:-' + slackJson[_env].Summary.totalScenarios + '\nScenarios Passed:- ' + slackJson[_env].Summary.scenariosPassed + '\nScenarios Failed:- ' + slackJson[_env].Summary.scenariosFailed + '\n*Overall Status : ' + slackJson[_env].Summary.status + '*';

_message = {
    username: slackUsername,
    text: messageText,
    attachments: _attachments,
    icon_emoji: _icon_emoji
};

setSlackChannel(_env);
console.log("_message : \n", _message);

publishToSlack(_message);

console.log("\n\n\nreport : \n", report);

pushReportToSlack(report);
//------------------------------------------------------------------------------------------------------------------------ 

var remResult = findRemoveSync('./reports', { extensions: ['.json'] });
console.log('Json Results removed Successfully', '\nJson remResult : ', remResult);

//fs.unlinkSync('./reports/cucumber-report.html.json');