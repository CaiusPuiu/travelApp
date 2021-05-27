import { LitElement, html, css } from 'lit-element';
import '../Components/LandingComponents/Header';
import '../Components/LandingComponents/Footer.js';
import '../Components/TravelComponents/AddDestinationForm.js';

export class AddPlacePage extends LitElement {
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

customElements.define('add-place-page', AddPlacePage);
