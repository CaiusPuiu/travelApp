import {
  LitElement,
  html,
  css,
} from '../node_modules/lit-element/lit-element.js';
import './travel-item';

class TravelCard extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      data: { type: Array },
    };
  }

  static get styles() {
    return css`
      div {
        background-color: rgba(245, 245, 245, 255);
        width: 100vw;
        padding: 10px;
        margin-bottom: 35px;
      }

      div h1 {
        margin-top: 0;
        padding-top: 2px;
        text-align: center;
        margin-left: 1em;
        margin-top: 15px;
      }

      h1 {
        color: #847ff0;
      }

      ul {
        max-width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4em;
        margin-left: 0;
      }
      ul li {
        list-style-type: none;
        background-color: #ffff;
        padding: 2em;
        border-radius: 1em;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.data) {
      this.fetchData();
    }
  }

  async fetchData() {
    this.loading = true;
    const response = await fetch(
      `https://devschool-2020.firebaseio.com/Caius/places/-M_MwHztH2cSS9Fmcp3I.json`
    );
    const jsonResponse = await response.json();
    this.data = jsonResponse;
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html` <p>Loading...</p> `;
    }
    return html`
      <div>
        <h1>Pick your favourite place!</h1>
        <ul>
          ${this.data.map(
            item => html`
              <li>
                <travel-item .travelItem=${item}></travel-item>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define('travel-card', TravelCard);
