import { LitElement, html, css } from 'lit-element';

class ContentDescription extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      .content-description {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ededed;
        width: 95vw;
        margin-left: 24px;
      }
      .content-description img {
        width: 60vw;
        height: 100vh;
        border-radius: 0% 400% 140% 0%;
        border: solid 4px #bdbdbd;
      }
      .content-description-text {
        width: 40vw;
        margin-left: 4px;
        margin-top: 15px;
        font-family: Arial, Helvetica, sans-serif;
      }
      .content-description-text p {
        color: #8f8f8f;
        line-height: 2em;
      }
      .explore-more-button {
        margin-top: 25px;
        padding: 30px 40px;
        border-radius: 1.5em;
        border: solid 5px #ffffff;
        color: #ffffff;
        background-color: #847ff0;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .explore-more-button {
          font-size: 0.4em;
        }
        .content-description-text {
          margin-top: 7em;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        .explore-more-button {
          font-size: 0.4em;
          padding: 3.5em;
        }
        .content-description {
          margin-top: 75px;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        .explore-more-button {
          font-size: 0.4em;
          padding: 2.8em;
        }
        .content-description {
          margin-top: 0;
          position: relative;
          bottom: 15em;
        }
        .content-description-image {
          width: 30vw;
          height: auto;
          border-radius: 0;
        }
        .content-description-text {
          position: relative;
          left: 5px;
        }
        .content-description-text p {
          font-size: 0.6em;
        }
        .content-description-text h2 {
          font-size: 1em;
        }
      }
    `;
  }

  render() {
    if (this.loading) {
      return 'Content description is loading';
    }
    return html`
      <div class="content-description">
        <div class="content-description-image">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib=rb-1.2.1%26auto=format%26fit=crop%26w=1050%26q=80"
            alt="Not working"
          />
        </div>

        <div class="content-description-text">
          <h2>Amazing Places to enjoy your Travel</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur dicta assumenda dolorum molestias totam at vel nobis
            illo facere excepturi.
          </p>
          <button type="button" class="explore-more-button">
            Explore More
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('content-description-component', ContentDescription);
