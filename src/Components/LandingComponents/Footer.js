import { LitElement, html, css } from 'lit-element';

class Footer extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      footer {
        padding: 168px 72px 4px 72px;
        background-color: #847ff0;
        margin: 0 24px 0 24px;
        color: #fff;
      }

      .footer-contacts {
        padding-top: 4px;
        padding-bottom: 4px;
        display: flex;
        width: 95vw;
        justify-content: space-around;
      }
      .footer-contacts ul {
        display: flex;
      }
      .footer-contacts ul li {
        list-style-type: none;
        margin-right: 2em;
        font-weight: 500;
      }

      footer .subscribe-section {
        text-align: center;
        margin-top: 12px;
        margin-bottom: 12px;
      }
      footer .subscribe-section h3 {
        margin-bottom: 10px;
        padding-top: 14px;
        font-size: 30px;
      }
      footer .subscribe-section p {
        font-size: 20px;
        margin-bottom: 12px;
      }
      footer .subscribe-section input[type='email'] {
        padding: 40px;
        width: 46%;
        border-radius: 4em;
        position: relative;
        border: none;
      }
      footer .subscribe-section input::placeholder {
        font-size: 14px;
        font-weight: 600;
        width: 800vw;
        padding-left: 3em;
        position: fixed;
        color: #847ff0;
      }
      footer .subscribe-section input[type='button'] {
        margin-top: 4px;
        border: none;
        cursor: pointer;
        padding: 1.7em 3em;
        border-radius: 3em;
        background-color: #847ff0;
        color: #ffffff;
        font-weight: bold;
        font-size: 19px;
        position: absolute;
        right: 30%;
      }
      footer .subscribe-section input[type='button']:hover {
        background-color: #03fc7b;
        transition: 0.5s;
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        footer .subscribe-section input[type='button'] {
          position: relative;
          top: 2px;
          left: 1px;
          border: solid 2px #bdbdbd;
        }
        .footer-contacts {
          font-size: 0.7em;
          padding: 2px;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        footer .subscribe-section {
          position: relative;
          bottom: 100px;
          padding:1px;
        }
        footer .subscribe-section input[type='button'] {
          position: relative;
          top: 2px;
          left: 1px;
          border: solid 2px #bdbdbd;
          font-size: 0.6em;

        }
        footer #email {
          width: 15em;
          height: 4em;
          padding:0.4em;
        }
        .footer-contacts {
          font-size: 0.5em;
          padding: 2px;
          position: relative;
          right: 100px;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        footer .subscribe-section {
          position: relative;
          bottom: 100px;
        }
        footer .subscribe-section p {
          font-size: 0.8em;
        }
        footer .subscribe-section h3 {
          font-size: 1.5em;
        }

        footer .subscribe-section input[type='button'] {
          position: relative;
          top: 2px;
          left: 1em;
          border: solid 2px #bdbdbd;
          font-size: 0.6em;
        }
        footer #email {
          width: 10em;
          height: 1em;
          padding:1em;
          position:relative;
          right:1.2em;
        }
        .footer-contacts {
          font-size: 0.5em;
          padding: 2px;
          position: relative;
          right: 13em;
        }
        .footer-contacts p {
          position: relative;
          left: 5em;
        }
      }
    `;
  }

  render() {
    if (this.loading) {
      return 'Footer is loading...';
    }
    return html`
      <footer>
        <div class="subscribe-section">
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            commodi molestias maxime voluptatum odit reprehenderit dolorum
            accusantium quae labore ad.
          </p>
          <input
            type="email"
            name="email"
            id="email"
          />
          <input type="button" value="Subscribe" />
        </div>

        <hr />
        <div class="footer-contacts">
          <p>&copy; DevSchool 2021</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
