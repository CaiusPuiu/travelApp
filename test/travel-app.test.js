import { html, fixture, expect } from '@open-wc/testing';

import '../src/travel-app.js';


describe('TravelApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<travel-app></travel-app>`);
  });


  // it('passes the a11y audit', async () => {
  //   await expect(element).shadowDom.to.be.accessible();
  // });
});
