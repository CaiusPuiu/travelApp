import {
  LitElement,
  html,
  css,
} from '../node_modules/lit-element/lit-element.js';

class TravelItem extends LitElement {
  static get properties() {
    return {
      travelItem: { type: Object },
    };
  }

  static get styles() {
    return css`
      img {
        height: 450px;
        width: 600px;
        cursor: pointer;
      }
      h3 {
        color: #8f8f8f;
      }
      p {
        font-family: Arial, Helvetica, sans-serif;
        color: #8f8f8f;
      }
    `;
  }

  render() {
    return html`
      <div>
        <img src=${this.travelItem.imageUrl} alt="not working" />
        <h1>${this.travelItem.name}</h1>
        <h3>${this.travelItem.type}</h3>
        <p>Description: ${this.travelItem.description}</p>
      </div>
    `;
  }
}

customElements.define('travel-item', TravelItem);
