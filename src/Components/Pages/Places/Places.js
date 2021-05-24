import { LitElement, html, css } from 'lit-element';
import '../../LandingComponents/Header.js';
import '../../LandingComponents/Footer.js';
import '../../TravelComponents/TravelCardList.js';

export class Places extends LitElement {
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

customElements.define('places-page', Places);
