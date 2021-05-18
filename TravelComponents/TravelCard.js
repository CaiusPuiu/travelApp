import { LitElement, html, css } from 'lit-element';

class TravelCard extends LitElement {
  static get properties() {
    return {
      travelCard: { type: Object },
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

      @media only screen and (min-width: 1201px) {
        img {
          height: 350px;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        img {
          width: 100%;
          max-width: 1024px;
          height: 350px;
        }
      }
    `;
  }

  render() {
    return html`
      <div>
        <img src=${this.travelCard.imageUrl} alt="not working" />
        <h1>${this.travelCard.name}</h1>
        <h3>${this.travelCard.type}</h3>
        <p>Description: ${this.travelCard.description}</p>
      </div>
    `;
  }
}

customElements.define('travel-card', TravelCard);
