import { LitElement, html, css } from 'lit-element';
import '../Components/LandingComponents/Header.js';
import '../Components/LandingComponents/Footer.js';

export class ContactUsPage extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`

      <header-component></header-component>
      <h1>Contact us on phone or email</h1>
      <p>+1234567890</p>
      <p>smth@gmail.com</p>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('contact-us-page', ContactUsPage);
