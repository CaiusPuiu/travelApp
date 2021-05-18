import { LitElement, css, html } from '@lion/core';
import './LionWevComponents/TraveLionButton.js';
import './LionWevComponents/TravelLionForm.js';
import './LionWevComponents/TravelLionInput.js';
import { ajax } from '@lion/ajax';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      form {
        background-color: #ededed;
        border: 8px solid #bdbdbd;
        padding: 48px;
        border-radius: 36px;
        width: 40%;
        margin: 0 auto;
      }
      travel-lion-button {
        border: 4px solid;
        border-radius: 12px;
        background-color: #847ff0;
        padding: 12px 12px;
        font-size: 8px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 10px;
      }
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <travel-lion-form>
        <form @submit=${this._handleFormSubmit}>
          <travel-lion-input name="name" label="Location's name">
          </travel-lion-input>
          <travel-lion-input name="type" label="Location's type">
          </travel-lion-input>
          <travel-lion-input
            name="description"
            label="Location's description"
          ></travel-lion-input>
          <travel-lion-input
            name="imageUrl"
            label="Location's picture"
          ></travel-lion-input>
          <travel-lion-button type="submit">Add location</travel-lion-button>
        </form>
      </travel-lion-form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this.data = Object.fromEntries(formData);
    this._postLocation(this.data);
  }

  async _postLocation() {
    const { response } = await ajax.fetchJson(
      'https://devschool-2020.firebaseio.com/Caius/places.json',
      {
        method: 'POST',
        body: this.data,
      }
    );
    console.log(response);
  }
}

customElements.define('destination-form', DestinationForm);
