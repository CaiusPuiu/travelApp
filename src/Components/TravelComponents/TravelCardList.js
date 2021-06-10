import { LitElement, html, css } from 'lit-element';
import './TravelCard';

class TravelCardList extends LitElement {
  static get properties() {
    return {
      travelCardList: {
        type: Array,
      },
      load: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      div {
        background-color: #ededed;
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
        background-color: #ffffff;
        padding: 2em;
        border-radius: 1em;
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        .card-list-container {
          position: relative;
          bottom: 12em;
        }
        ul {
          max-width: 75vw;
          height: auto;
          display: block;
        }
        ul li {
          margin-bottom: 2em;
        }
        h1 {
          font-size: 1.4em;
        }
      }
    `;
  }

  constructor() {
    super();
    this.travelCardList = [];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.travelCardListt) {
      this.loading();
    }
  }

  async loading() {
    try{
      const response = await fetch(
      'https://devschool-2020.firebaseio.com/Caius/places.json');
      const data = await response.json();
      this.travelCardList = Object.values(data);
      this.load = false;
      return [response,null];
    }

    catch (error){
      console.error(error);
      return [null, error];
    }
  }

  render() {
    return html`
      ${this.load
        ? html`<p>Content is loading...</p>`
        : html`<div class="card-list-container">
            <h1>Book Now!</h1>
            <ul>
              ${this.travelCardList.map(
                location =>
                  html`
                    <li>
                      <travel-card .travelCard=${location}></travel-card>
                    </li>
                  `
              )}
            </ul>
          </div>`}
    `;
  }
}

customElements.define('travel-card-list', TravelCardList);
