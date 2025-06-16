import { LitElement, html, css } from 'https://unpkg.com/lit?module';
import './socialwid/socialwidget.js';
import './namewidget/namewidget.js';
import './projectwidget/projectwidget.js'

class HStyle extends LitElement {
    static styles = css`

    .container{
    height: 90vh;
    margin-top: 2%;
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 2%;
    display: grid;
    background-color: rgb(155, 196, 226);
    grid-template-columns: clamp(200px, 32%, 580px) clamp(300px, 37%, 680px) clamp(180px, 26%, 450px);
    grid-template-rows: 17vh 15vh 13vh 15vh 15vh;
    justify-content: center;
    align-content: center;
    text-align: center;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    }
    
    .namebox {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 6;
        background-color:rgb(42, 62, 124);
        border-radius: 20px;
    }

     .socialbox {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        background-color: rgb(90, 123, 148);
        border-radius: 20px;
    }

     .projectbox {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 6;
        background-color: rgb(90, 123, 148);
        border-radius: 20px;
    }

     .abtmebox {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 4;
        background-color: rgb(90, 123, 148);
        border-radius: 20px;
    }

      .edbox {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 6;
        background-color: rgb(90, 123, 148);
        border-radius: 20px;
    }

    `;

    render() {
        return html`
        <div class="container">
            <div class="namebox"> <name-widget></name-widget> </div>
            <div class="socialbox"> <social-widget></social-widget> </div>
            <div class="projectbox"> <project-widget></project-widget> </div>
            <div class="abtmebox"> Box 4 </div>
            <div class="edbox"> Box 5 </div>
        </div>
        `;
    }
}

customElements.define('h-style', HStyle)