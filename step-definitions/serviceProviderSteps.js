var jsonfile = require('jsonfile');
var faker = require('faker');

// Configuration
config = jsonfile.readFileSync('./support/'+featureConfig);
/* Random Name Generation Logic----------------------------------START*/
//var configFile = require('../support/config.json');
// var filePath = './support/config.json';
var randomName;
var finalRandomServiceName = config.Service.ServiceName;
var finalRandomServiceName2 = config.Service.ServiceName2;

//eliminate Special Character "'", Mr." "Mrs." From Random Name
function eliminateSplCharFromName(rndmName) {

  ////console.log('This is rndmName in eleminate method: ' + rndmName + '\n\n');
  var modifiedName = rndmName;

  if (rndmName.includes("'")) {
    modifiedName = rndmName.replace(/'/g, "").trim();
  }
  if (rndmName.includes(",")) {
    modifiedName = rndmName.replace(/,/g, "").trim();
  }
  if (rndmName.includes("Mr.")) {
    modifiedName = rndmName.replace("Mr.", "").trim();
  }
  if (rndmName.includes("Mrs.")) {
    modifiedName = rndmName.replace("Mrs.", "").trim();
  }
  if (rndmName.includes("Ms.")) {
    modifiedName = rndmName.replace("Mrs.", "").trim();
  }
  return modifiedName;
}

//Generate Random Fake name for Adding a Person
function generateRandomName() {

  randomName = faker.company.companyName().concat("uiService");

  ////console.log('This is Initial Name in Config:' + finalRandomName + '\n\n');

  RandomServiceName = eliminateSplCharFromName(randomName);
  ////console.log('This is finalRandomName:' + finalRandomName + '\n\n');

  return RandomServiceName;
}

//Method to Update Config File with Random name
function writeToConfig(fileObj) {

  fileObj.Service.ServiceName = finalRandomServiceName;
  fileObj.Service.ServiceName2 = finalRandomServiceName2;
  ////console.log('This is to WriteFile Stringified fileObj:' +'\n\n' + JSON.stringify(fileObj) + '\n\n');

  jsonfile.writeFileSync(filePath, fileObj);
  //console.log('Name Write Successful');
  config = jsonfile.readFileSync('./support/'+featureConfig);
}

module.exports = function () {

  this.When(/^I add new Service Provider$/, function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var org = config.Organisation.BasicInfo.NewName;
    return page.pageHead.servicesNavigation()
      .then(function () {
        return page.serviceProvider_page.addServiceProvider(org);
      })
  });

  this.When(/^I add new Service$/, function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var org = config.Organisation.BasicInfo.NewName;
    var serviceName = generateRandomName();
    finalRandomServiceName = serviceName;
    return page.pageHead.servicesNavigation()
      .then(function () {
        console.log('Service name: ', serviceName);
        return page.serviceProvider_page.addService(org, serviceName)
          .then(function () {
            return writeToConfig(config);
          });
      });
  });

  //I add another Service
  this.When(/^I add another Service$/, function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var org = config.Organisation.BasicInfo.NewName;
    var serviceName2 = generateRandomName();
    finalRandomServiceName2 = serviceName2;
    console.log('Service name: ', serviceName2);
    return page.serviceProvider_page.addAnotherService(org, serviceName2)
      .then(function () {
        return writeToConfig(config);
      });
  });
};