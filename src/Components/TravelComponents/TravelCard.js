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
          height: 200px;
        }
        .travel-card-container {
          height: 300px;
        }
        h1 {
          font-size: 18px;
        }
        h3 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        img {
          width: 100%;
          height: 100px;
        }
        .travel-card-container {
          height: 180px;
        }
        h1 {
          font-size: 12px;
        }
        h3 {
          font-size: 10px;
        }
        p {
          font-size: 7px;
        }
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
        img {
          width: 100%;
          height: 100px;
        }
        .travel-card-container {
          height: 180px;
        }
        h1 {
          font-size: 12px;
        }
        h3 {
          font-size: 10px;
        }
        p {
          font-size: 7px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="travel-card-container">
        <img src=${this.travelCard.imageUrl} alt="not working" />
        <h1>${this.travelCard.name}</h1>
        <h3>${this.travelCard.type}</h3>
        <p>Description: ${this.travelCard.description}</p>
      </div>
    `;
  }
}

customElements.define('travel-card', TravelCard);
