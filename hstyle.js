import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class HStyle extends LitElement {
    static styles = css`
    h1 {
    color: red;
    }
    `;

    render() {
        return html`
        <h1> Hello, World!!! </h1>
        <p> JS PARA WORKS </p>
        `;
    }
}

customElements.define('h-style', HStyle)