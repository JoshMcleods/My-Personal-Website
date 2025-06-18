import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class EducationWidget extends LitElement {
    static styles = css` 

  .name-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: clamp(10px, 100px, 300px);
    
    }
  
  .b {
    display: inline-block; 
    transition: transform 0.2s ease; 
    }
  
  .b:hover {
  transform: scale(1.05);
  }

  img {
    width: clamp(1vh, 50vh, 40vh);
    height: clamp(1vh, 20vh, 20vh):
    object-fit: contain;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 25px;
    cursor: pointer;
    }

  h1 {
    font-size: 32px; 
    text-align: center;
    color: black;
    } 

  .body-para {
    font-size: 14; 
    color: black;
    width: 400px;
    text-align: center;
  }
  
  th {
  color: orange;
  }

  tr, td {
  color: red;
  width: 30vh;
  }

  `;



    render() {
        return html`
        <h1> Education </h1>

    <table>
    <tr> 
      <th> education </th> 
      <th> column 2 </th> 
    </tr>
      
    <tr>
      <td> Practice table </td>
      <td> js playing around </td>
    </tr>
    </table>

  `
    }
}

customElements.define('education-widget', EducationWidget);
