import { LionInput } from '@lion/input';

class TravelLionInput extends LionInput {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travel-lion-input', TravelLionInput);
