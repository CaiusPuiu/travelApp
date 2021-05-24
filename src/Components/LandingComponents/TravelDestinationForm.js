import { LitElement, html, css } from 'lit-element';

class TravelDestinationForm extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      .travel-destination-form {
        background-color: #ededed;
        border: 8px solid #bdbdbd;
        padding: 48px;
        border-radius: 36px;
        width: 75%;
        margin: 0 auto;
        position: absolute;
        top: 85%;
        left: 0;
        right: 0;
      }
      .travel-destination-form form {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .form-book-now {
        border: 4px solid;
        border-radius: 12px;
        background-color: #847ff0;
        padding: 24px 24px;
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 10px;
      }
      .travel-destination-form div {
        float: left;
        margin: 12px;
      }
      .travel-destination-form input {
        padding: 12px;
        border: 4px solid #bdbdbd;
        border-radius: 12px;
      }
      .travel-destination-form select {
        padding: 12px;
        border: 4px solid #bdbdbd;
        border-radius: 12px;
      }
      .travel-destination-form label {
        font-weight: 800;
        text-align: left;
        display: block;
        margin-bottom: 12px;
        margin-left: 20px;
      }

      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        .travel-destination-form {
          width: 95vw;
        }
        .travel-destination-form form div {
          margin: 3px;
          padding: 1px;
        }
        .hero-image-credits {
          position: relative;
          bottom: 155px;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .travel-destination-form-content {
          width: 100vw;
          display: flex;
          flex-flow: wrap;
          font-size: 10px;
        }
        .travel-destination-form {
          padding-bottom: 10px;
          padding-top: 5px;
        }

        .form-book-now {
          font-size: 0.7em;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        .travel-destination-form-content {
          width: 100vw;
          display: flex;
          flex-flow: wrap;
          font-size: 10px;
        }
        .travel-destination-form {
          padding-bottom: 5px;
          padding-top: 5px;
          margin-bottom: 10px;
        }
        .travel-destination-form-destinations select {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-members input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-check-in input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-check-out input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .form-book-now {
          font-size: 0.6em;
          padding: 3.5em;
          margin-top: 0;
          position: relative;
          left: 35px;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        .travel-destination-form-content {
          width: 100vw;
          display: flex;
          flex-flow: wrap;
          font-size: 8px;
        }
        .travel-destination-form {
          padding-bottom: 5px;
          padding-top: 5px;
          margin-bottom: 10px;
          position: relative;
          bottom: 15em;
        }

        .travel-destination-form-destinations select {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-members input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-check-in input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .travel-destination-form-check-out input {
          width: 12em;
          padding: 4px;
          margin: 0;
        }
        .form-book-now {
          font-size: 0.6em;
          padding: 3.5em;
          margin-top: 0;
          position: relative;
          left: 35px;
        }
      }
    `;
  }

  render() {
    if (this.loading) {
      return 'Content description is loading';
    }
    return html`
      <div class="travel-destination-form">
        <form>
          <div class="travel-destination-form-content">
            <div class="travel-destination-form-destinations">
              <label for="destination">Destination</label>
              <select name="destination">
                <option value="St Kitts and Nevis">St Kitts and Nevis</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Madeira">Madeira</option>
                <option value="Solomon Islands">Solomon Islands</option>
              </select>
            </div>

            <div class="travel-destination-form-members">
              <label for="member">Members</label>
              <input type="number" min="1" name="member" />
            </div>
            <div class="travel-destination-form-check-in">
              <label for="checkIn">Check in Date</label>
              <input type="date" name="checkIn" />
            </div>
            <div class="travel-destination-form-check-out">
              <label for="checkOut">Check out Date</label>
              <input type="date" name="checkOut" />
            </div>
            <button type="button" class="form-book-now">Book Now</button>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define(
  'travel-destination-form-component',
  TravelDestinationForm
);
