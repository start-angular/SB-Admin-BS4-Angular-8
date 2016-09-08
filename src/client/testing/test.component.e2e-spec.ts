describe('Test', () => {
	beforeEach( () => {
		browser.get('/test');
	});
	it('should have correct feature heading', () => {
		expect(element(by.css('h2')).getText()).toEqual('Testing');
	});
});
