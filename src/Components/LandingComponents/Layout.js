import { html, LitElement, css } from 'lit-element';

class Layout extends LitElement {
  static get styles() {
    return css`
      * {
        text-align: center;
        box-sizing: border-box;
      }

      .container {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #ededed;
      }

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
        nav a {
          font-size: 0.7em;
          padding: 5px;
        }
        .header-book-now {
          font-size: 0.8em;
        }
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

        footer .subscribe-section {
          position: relative;
          bottom: 100px;
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
        }
        .footer-contacts {
          font-size: 0.5em;
          padding: 2px;
          position: relative;
          right: 100px;
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

  static get properties() {
    return {
      _isLoading: {
        type: Boolean,
      },
    };
  }

  render() {
    if (this._isLoading) {
      return 'Page is loading...';
    }
    return html`
      <div calss="container">
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
              href="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1%26ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto=format%26fit=crop%26w=667%26q=80"
              >Unsplash</a
            >
          </div>
        </div>

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
              placeholder="Enter your email address"
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
      </div>
    `;
  }
}

customElements.define('layout-component', Layout);
