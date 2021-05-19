import { LitElement, html, css } from 'lit-element';
import './TravelCard';

class TravelCardList extends LitElement {
  static get properties() {
    return {
      data: {
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
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this._cardList) {
      this.loading();
    }
  }

  async loading() {
    const response = await fetch(
      'https://devschool-2020.firebaseio.com/Caius/places.json'
    );
    const data = await response.json();
    this._cardList = Object.values(data);
    this.load = false;
  }

  render() {
    return html` ${this.load
      ? html`<p>Content is loading...</p>`
      : html`<h1 class="bookNow">Book Now!</h1>
          <ul>
            ${this._cardList.map(
              location =>
                html`
                  <li>
                    <travel-card .travelCard=${location}></travel-card>
                  </li>
                `
            )}
          </ul> `}`;
  }
}

customElements.define('travel-card-list', TravelCardList);
