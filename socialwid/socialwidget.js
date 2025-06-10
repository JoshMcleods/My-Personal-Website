import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class SocialWidget extends LitElement {
  static styles = css`
    img {
    width: 10vh;
    height: 10vh:
    display: block;
    margin: 0 auto;
    }
  `;

  render() {
    return html`
        <img src ="socialwid/linkedinpfp.png" alt="LinkedIn Profile" />
        <img src ="socialwid/githubpfp.png" alt="Github Profile" />\
        <img src ="socialwid/tryhackmepfp.png" alt="Github Profile" />
    `;
  }
}

customElements.define('social-widget', SocialWidget);