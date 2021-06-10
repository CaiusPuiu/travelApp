import { LitElement, css, html } from '@lion/core';
import { ajax } from '@lion/ajax';
import { MinLength, Required } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { IsRomania } from '../FormValidators/IsRomania.js';
import '@lion/form/define';
import '@lion/input/define';
import '@lion/button/define';

class AddDestinationForm extends LitElement {
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
      lion-button {
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
    loadDefaultFeedbackMessages();
  }

  render() {
    return html`
      <lion-form>
        <form @submit=${this._handleFormSubmit}>
          <lion-input
            name="name"
            label="Name"
            .validators=${[
              new MinLength(4, {
                getMessage: () => 'Please enter a valid name location',
              }),
              new Required(),
              new IsRomania(),
            ]}
          >
          </lion-input>
          <lion-input
            name="type"
            label="Type"
            .validators=${[
              new MinLength(4, {
                getMessage: () => 'Please enter a valid type location',
              }),
            ]}
          >
          </lion-input>
          <lion-input
            name="description"
            label="Description"
            .validators=${[
              new MinLength(4, {
                getMessage: () => 'Please enter a valid description',
              }),
              new Required(),
            ]}
          >
          </lion-input>
          <lion-input
            name="imageUrl"
            label="ImageUrl"
            .validators=${[new Required()]}
          >
          </lion-input>
          <lion-button type="submit">Add location</lion-button>
        </form>
      </lion-form>
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
    try{

      const { response } = await ajax.fetchJson(
        'https://devschool-2020.firebaseio.com/Cdasdsaius/places.json',
        {
          method: 'POST',
          body: this.data,
        }
      );
      console.log(response);
      return [response, null];
    }
    catch(error){
      console.error(error);
      return [null, error];
    }
  }
}

customElements.define('add-destination-form', AddDestinationForm);
