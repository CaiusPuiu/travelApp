import { LitElement, html, css } from 'lit-element';
import '../Components/LandingComponents/Header.js';
import '../Components/LandingComponents/Footer.js';
import '../Components/LandingComponents/TravelDestinationForm.js';
import '../Components/LandingComponents/Hero.js';
import '../Components/LandingComponents/ContentDescription.js';

export class Home extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <header-component></header-component>
      <hero-component></hero-component>
      <travel-destination-form-component></travel-destination-form-component>
      <content-description-component></content-description-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('home-page', Home);
