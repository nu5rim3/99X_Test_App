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



<a href="https://ibb.co/2NzgH3f"><img src="https://i.ibb.co/2NzgH3f/Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-47.png" alt="Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-47" border="0"></a> 
<a href="https://ibb.co/Stkjmt7"><img src="https://i.ibb.co/Stkjmt7/Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-43.png" alt="Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-43" border="0"></a> 
<a href="https://ibb.co/zVp5gJF"><img src="https://i.ibb.co/zVp5gJF/Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-38.png" alt="Simulator-Screen-Shot-i-Phone-X-2019-08-08-at-12-00-38" border="0"></a>
 <a href="https://ibb.co/0mdtf89"><img src="https://i.ibb.co/0mdtf89/Screen-Shot-2019-08-08-at-12-00-26-PM.png" alt="Screen-Shot-2019-08-08-at-12-00-26-PM" border="0"></a>