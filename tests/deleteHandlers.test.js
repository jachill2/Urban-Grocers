// eslint-disable-next-line no-undef
const config = require('../config');


test( 'When sending a DELETE request for an existing kit, the response status should be 200' , async () => {
	let deleteStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		}
	);
	deleteStatus = response.status
	} catch (error) {
		console.error(error);
	}
	expect(deleteStatus).toBe(200);
});



	test( 'The response body for the DELETE request should confirm the change' , async () => {
		let deleteBody;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/kits/70`, {
				method: 'DELETE',
			}
		);
		deleteBody = await response.json();
		} catch (error) {
			console.error(error);
		}
		expect(deleteBody["ok"]).toBe(true);
	});
