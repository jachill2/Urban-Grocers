// eslint-disable-next-line no-undef
const config = require('../config');

test('GET request status for list of warehouses should be 200', async () => {
	let getStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		getStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(getStatus).toBe(200);
});


test('GET request body for list of warehouses should contain Everything You Need', async () => {
	let getBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		getBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(getBody[0].name).toContain("Everything You Need");
});
