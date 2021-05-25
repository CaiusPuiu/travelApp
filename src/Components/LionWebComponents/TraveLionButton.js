import { LionButton } from '@lion/button';

class TravelLionButton extends LionButton {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travel-lion-button', TravelLionButton);
