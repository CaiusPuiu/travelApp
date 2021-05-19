import { LionForm } from '@lion/form';

class TravelLionForm extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travel-lion-form', TravelLionForm);
