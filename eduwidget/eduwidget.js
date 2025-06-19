import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class EducationWidget extends LitElement {
  static styles = css` 

 
  h1 {
    font-size: 32px; 
    text-align: center;
    color: black;
    text-decoration: underline;
    text-underline-offset: 8px;
    } 

  p {
  font-size: 14pt;
  color: black;
  text-align: left;
  margin-left: 25px;
  font-weight: 650;
  }
  
  b {
  font-size: 12pt;
  color: black;
  text-align: left;
  font-weight: 400;
  }

  `;



  render() {
    return html`
        <h1> Education </h1>
    <p> Bachelor of Cybersecurity </p>
      <b>  Macquarie University: Expected Graduation 12/2026 </b>
    
    <p> TryHackMe </p>
    <b> Top 5% Global User </b>

     <p> Hunters Hill High School </p>
    <b> Graduated 2022 </b>

  `
  }
}

customElements.define('education-widget', EducationWidget);
