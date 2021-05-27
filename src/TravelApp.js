import { LitElement, html, css } from 'lit-element';
import './Pages/HomePage.js';
import './Pages/PlacesPage.js';
import './Pages/AddPlacePage.js';
import { Router } from '@vaadin/router';
export class TravelApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  firstUpdated(){
    const outlet = this.shadowRoot.getElementById('travel-app');
    const router = new Router(outlet);
      router.setRoutes([
        { path: '/', component: 'home-page' },
        { path: '/places', component: 'places-page' },
        { path: '/add-destination', component: 'add-place-page' }
      ]);
  }

  render() {
      return html `
        <main id="travel-app"></main>
      `
  }
}
