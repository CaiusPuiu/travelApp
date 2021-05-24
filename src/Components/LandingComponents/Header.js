import { LitElement, html, css } from 'lit-element';

class Header extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      header h3 {
        font-weight: 400;
        color: #847ff0;
        font-size: 24px;
        font-weight: 600;
      }

      header nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 12px 12px 36px 12px;
      }

      header li {
        padding: 8px;
        display: inline-block;
        font-size: 24px;
      }

      header a {
        color: #000000;
        text-decoration: none;
        padding: 24px;
      }

      header ul li a:hover {
        background-color: #847ff0;
      }

      .header-book-now {
        border: 4px solid #ffffff;
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

      @media screen and (min-width: 1201px) {
        nav {
          width: 95%;
        }
      }

      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        nav {
          max-width: 950px;
          display: flex;
          justify-content: space-evenly;
        }
        nav a {
          padding: 4px;
        }
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        nav a {
          font-size: 0.7em;
          padding: 5px;
        }
        .header-book-now {
          font-size: 0.8em;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        nav {
          display: flex;
          flex-direction: column;
        }
        nav a {
          font-size: 0.7em;
          padding: 5px;
        }
        .header-book-now {
          font-size: 0.7em;
          padding: 20px;
        }
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
        header h3 {
          font-size: 24px;
        }

        nav {
          display: flex;
          flex-direction: column;
        }
        nav a {
          font-size: 0.3em;
          padding: 3px;
        }
        .header-book-now {
          font-size: 0.7em;
          padding: 18px;
          position: relative;
          top: 24px;
        }
      }
    `;
  }

  render() {
    if (this.properties) {
      return 'Header is loading...';
    }
    return html`
      <header>
        <nav>
          <h3>Travel Now</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <a href="#"><span class="header-book-now">Book now</span></a>
        </nav>
        <link rel="shortcut icon" href="#" />
      </header>
    `;
  }
}

customElements.define('header-component', Header);
