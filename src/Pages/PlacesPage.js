import { LitElement, html, css } from 'lit-element';
import '../Components/LandingComponents/Header.js';
import '../Components/LandingComponents/Footer.js';
import '../Components/TravelComponents/TravelCardList.js';

export class PlacesPage extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <header-component></header-component>
      <travel-card-list></travel-card-list>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('places-page', PlacesPage);
