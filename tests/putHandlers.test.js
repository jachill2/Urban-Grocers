// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price":175
}


test('PUT request status for price change should be 200', async () => {
   let putStatus;
	try {

		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		putStatus = response.status;
		const data = await response.json();
        console.log(data);
	} catch (error) {
		console.error(error);
	}
	expect(putStatus).toBe(200);
});




	test('PUT request body should confirm the price change', async () => {
	   let putBody;
		try {
	
			const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
				method: 'PUT',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
			putBody = await response.json();
		} catch (error) {
			console.error(error);
		}
		expect(putBody["ok"]).toBe(true);
	});
	
