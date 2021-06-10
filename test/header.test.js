import { html, fixture, expect } from '@open-wc/testing';

import '../src/Components/LandingComponents/Header'

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    // arrange
    element = await fixture(html`<header-component></header-component>`);
  });


  it('renders a header element', async () => {
    const footerElement = element.shadowRoot.querySelector('header');
    expect(footerElement).to.exist;
  });

  it('renders a h3 element', async () => {
    const h3Element = element.shadowRoot.querySelector('h3');
    expect(h3Element).to.exist;
  });

  it('renders a button of type submit', async () => {
    const buttonElement = element.shadowRoot.querySelector('button');
    expect(buttonElement).to.exist;
    expect(buttonElement).to.have.attribute('type', 'button');
  });


});
