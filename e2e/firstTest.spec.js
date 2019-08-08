/* eslint-disable prettier/prettier */
const detox = require('detox');
const config = require('../package.json').detox;

describe('App', () => {
  beforeEach(async () => {
    if (typeof (device) == 'undefined') {
      await detox.init(config);
    }
    await device.reloadReactNative();
  });

  it('should have list screen', async () => {
    await expect(element(by.id('list_view'))).toBeVisible();
  });

  it('should click the list item', async () => {
    await element(by.id('list_item_click_1')).tap();
    await expect(element(by.id('detail_view'))).toBeVisible();
    await element(by.id('get-image-click')).tap();
    await expect(element(by.id('preview-image-view'))).toBeVisible();
    await element(by.id('preview_click_1')).tap();
    await expect(element(by.id('preview_view'))).toBeVisible();
  });

});