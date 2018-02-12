
module.exports = function () {
	var faker = require('faker');
	config = jsonfile.readFileSync('./support/'+featureConfig);

	// var filePath = './support/config.json';
	var fRandomAppointment = config.Appointment.RandomDescription;

	//Generate Random Fake name for Adding a Person
	function generateRandomName() {
		var tempMsg = faker.name.firstName();
		var finalRandomMsg = tempMsg;
		console.log('This is finalRandomMsg:', finalRandomMsg, '\n');
		return finalRandomMsg;
	}

	//Method to Update Config File with Random name
	function writeToConfig(fileObj) {
		fileObj.Appointment.RandomDescription = fRandomAppointment;
		jsonfile.writeFileSync(filePath, fileObj);
		config = jsonfile.readFileSync('./support/'+featureConfig);
	}

	this.Then(/^I navigate to Appointments$/, function () {
		return page.pageHead.appointmentsNavigation();
	});

	this.Then(/^I add new unique appointment$/, function () {
		var RandomDescription = generateRandomName();
		fRandomAppointment = RandomDescription;

		config = jsonfile.readFileSync('./support/'+featureConfig);

		return page.appointments_page.createNewAppointment(fRandomAppointment)
			.then(function () {
				return writeToConfig(config);
			});
	});

	this.Then(/^I verify the created unique appointment$/, function () {

		config = jsonfile.readFileSync('./support/'+featureConfig);

		var desc = config.Appointment.RandomDescription;
		var appointments = "Sample Test Description " + desc;
		return page.appointments_page.verifyCreatedAppointment(appointments);
	});
}