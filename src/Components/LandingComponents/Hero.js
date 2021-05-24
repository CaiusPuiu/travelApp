import { LitElement, html, css } from 'lit-element';

class Hero extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      .main-title {
        font-size: 48px;
        font-weight: 900;
        color: #ffffff;
      }

      .hero-image {
        background-image: url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fA%3D%3D%26ixlib=rb-1.2.1%26auto=format%26fit=crop%26w=500%26q=60');
        margin: 0 24px 0 24px;
        padding-bottom: 288px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        height: 600px;
      }
      .hero-image-credits {
        float: right;
        margin-top: 365px;
        background-color: #bdbdbd;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 8px;
      }
      .hero-image-credits a {
        color: #847ff0;
        font-weight: 400;
      }

      .start-tour-button {
        margin: 24px;
        border: 4px solid #ffffff;
        background-color: #847ff0;
        border-radius: 12px;
        padding: 24px 36px;
        font-size: 12px;
        font-weight: 900;
        color: #ffffff;
        cursor: pointer;
      }

      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        .main-title {
          font-size: 3em;
        }
        .hero-text {
          position: relative;
          top: 75px;
        }
        .hero-image-credits {
          position: relative;
          bottom: 155px;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .main-title {
          font-size: 2.5em;
          position: relative;
          top: 2em;
        }
        .start-tour-button {
          font-size: 0.6em;
          position: relative;
          top: 4em;
        }
        .hero-image-credits {
          position: relative;
          bottom: 130px;
        }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        .main-title {
          font-size: 2.1em;
          position: relative;
          top: 2em;
        }
        .start-tour-button {
          font-size: 0.3em;
          position: relative;
          top: 5em;
        }
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
        .main-title {
          font-size: 1.6em;
          position: relative;
          top: 2em;
        }
        .start-tour-button {
          font-size: 0.3em;
          padding: 20px;
          position: relative;
          top: 5em;
        }
      }
    `;
  }

  render() {
    if (this.loading) {
      return 'Content is loading';
    }
    return html`
      <div class="hero-image">
        <div class="hero-text">
          <h1 class="main-title">Discover The World With Us</h1>
          <button type="button" class="start-tour-button">Start Tour</button>
        </div>
        <div class="hero-image-credits">
          Photo by
          <a href="https://unsplash.com/@dariuszsankowski">
            Dariusz Sankowski
          </a>
          from
          <a
            href="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib=rb-1.2.1%26auto=format%26fit=crop%26w=667%26q=80"
            >Unsplash</a
          >
        </div>
      </div>
    `;
  }
}

customElements.define('hero-component', Hero);
