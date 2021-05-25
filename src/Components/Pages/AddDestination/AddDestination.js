import { LitElement, html, css } from 'lit-element';
import '../../LandingComponents/Header.js';
import '../../LandingComponents/Footer.js';
import '../../TravelComponents/AddDestinationForm.js';

export class AddDestination extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <header-component></header-component>
      <add-destination-form></add-destination-form>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('add-destination-page', AddDestination);
