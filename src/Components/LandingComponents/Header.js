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
          justify-content: space-between;
        }
        ul {
          display: block;
          padding-right: 32px;
        }

        li {
          display: inline-block;
          padding: 0px 8px;
        }
        li a {
          font-size:0.5em;
        }
        .header-book-now{
          font-size:0.5em;
          position: relative;
          top:15em;
          right:24em;
          height:7em;
          padding-bottom:1em;
          padding-top:2em;
        }

      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
        header h3 {
          font-size: 24px;
          position:relative;
          bottom:2em;
          left:1em;
        }
        nav {
          flex-direction: column;
          margin-top: 5em;
          text-align: center;
          flex-wrap: nowrap;
        }
        nav ul {
          flex-direction: column;
          margin: -2em;
        }
        nav ul li {
          line-height: 1.5em;
        }
        .header-book-now{
          position: relative;
          top:1em;
          left:1em;
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
            <li><a href="/add-destination">Add Destination</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <button type = "button" class="header-book-now">Book now</button>
        </nav>
        <link rel="shortcut icon" href="#" />
      </header>
    `;
  }
}

customElements.define('header-component', Header);
