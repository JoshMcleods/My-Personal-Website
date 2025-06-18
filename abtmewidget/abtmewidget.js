import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class AbtmeWidget extends LitElement {
    static styles = css` 

  h1 {
    font-size: 32px; 
    text-align: center;
    color: black;
    text-decoration: underline;
    } 

  .body-para {
    font-size: 14; 
    color: black;
    width: 400px;
    text-align: center;
  }

  `;



    render() {
        return html`
        <h1> About Me </h1>

  `
    }
}

customElements.define('abtme-widget', AbtmeWidget);
