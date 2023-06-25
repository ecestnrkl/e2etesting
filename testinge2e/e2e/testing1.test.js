describe('End-to-End Test', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should show the welcome screen', async () => {
      await expect(element(by.text('Willkommen'))).toBeVisible();
    });
  
    it('should show the second screen after tapping next', async () => {
      await element(by.id('nextButton')).tap();
      await expect(element(by.text('Zweiter Bildschirm'))).toBeVisible();
    });
  });
  