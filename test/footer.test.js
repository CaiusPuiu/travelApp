import { html, fixture, expect } from '@open-wc/testing';

import '../src/Components/LandingComponents/Footer'

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    // arrange
    element = await fixture(html`<footer-component></footer-component>`);
  });

  it('renders a footer element', async () => {
    const footerElement = element.shadowRoot.querySelector('footer');
    expect(footerElement).to.exist;
  });

  it('renders un with 5 elemnts', async () => {
    const unorderedList = element.shadowRoot.querySelector('ul');
    expect(unorderedList).to.exist;
    expect(unorderedList.children).to.have.lengthOf(5);
  });


});
