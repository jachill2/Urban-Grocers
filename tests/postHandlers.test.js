// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}

test('POST request status for Order and Go delivery should be 200', async () => {
    let postStatus;
	try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		postStatus = response.status;
		const data = await response.json();
        console.log(data);
	} catch (error) {
		console.error(error);
	}
	expect(postStatus).toBe(200);
});



	test('POST response body should contain the name Order and Go', async () => {
	   let postBody;
		try {
	
			const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
			postBody = await response.json();
		} catch (error) {
			console.error(error);
		}
		expect(postBody.name).toContain("Order and Go");
	});
