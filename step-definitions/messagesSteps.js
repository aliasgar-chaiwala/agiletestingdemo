
module.exports = function () {

	var faker = require('faker');
	config = jsonfile.readFileSync('./support/'+featureConfig);

	// var filePath = './support/config.json';
	var fRandomMessage = config.Message.RandomMessage;

	//Generate Random Fake name for Adding a Person
	function generateRandomName() {
		var tempMsg = faker.name.firstName();
		var finalRandomMsg = tempMsg;
		console.log('This is finalRandomMsg:', finalRandomMsg, '\n');
		return finalRandomMsg;
	}

	//Method to Update Config File with Random name
	function writeToConfig(fileObj) {
		fileObj.Message.RandomMessage = fRandomMessage;
		jsonfile.writeFileSync(filePath, fileObj);
		config = jsonfile.readFileSync('./support/'+featureConfig);
	}

	this.Then(/^I navigate to Messages$/, function () {
		return page.pageHead.messagesNavigation();
	});

	this.Then(/^I create new message to "([^"]*)" Manager "([^"]*)"$/, function (team, manager) {

		var randomMessage = generateRandomName();
		fRandomMessage = randomMessage;

		config = jsonfile.readFileSync('./support/'+featureConfig);
		var TmNo = manager.split("TeamManager");
		TmNo = 'TM' + TmNo[1];
		OwnedBy = config.Teams[team][TmNo].NAME;
		return page.messages_page.createNewMessage(OwnedBy, fRandomMessage)
			.then(function () {
				return writeToConfig(config);
			});
	});

	this.When(/^I should see the unique Messages$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);

		var msg = config.Message.RandomMessage;
		var ramdomMsg = "Sample Test " + msg;
		return page.messages_page.verifyCreatedMessage(ramdomMsg);
	});

	// this.Then(/^I should see message ([^"]*)$/, function (message) {
	// 	return page.messages_page.verifyCreatedMessage(message);
	// });

	this.Then(/^I choose reply the message$/, function () {
		// config = jsonfile.readFileSync('./support/'+featureConfig);

		// var msg = config.Message.RandomMessage;
		// var ramdomMsg = "Sample Test " + msg;
		return page.messages_page.replayMessage();
	});

	this.Then(/^I verify the reply Message Visible$/, function () {
		return page.messages_page.sentMessageVisible();
	});

	this.Then(/^I create new Team message to "([^"]*)" Manager "([^"]*)"$/, function (team, manager) {
		
		var randomMessage = generateRandomName();
		fRandomMessage = randomMessage;
		
		config = jsonfile.readFileSync('./support/'+featureConfig);
		OwnedBy = config.Teams[team].NAME;
		return page.messages_page.createTeamNewMessage(OwnedBy, fRandomMessage)
			.then(function () {
			return writeToConfig(config);
		});
	});

	this.Then(/^I should see Team Message screen$/, function () {
		return page.messages_page.teamMessage();
	});
}