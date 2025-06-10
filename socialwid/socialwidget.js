import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class SocialWidget extends LitElement {
  static styles = css`
   .social-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: clamp(10px, 100px, 300px);
    }
  
    a {
      display: inline-block; 
      border-radius: 12px; 
      transition: transform 0.2s ease; 
    }

    a:hover {
      transform: scale(1.05); 
    }

  img {
    width: clamp(1vh, 12vh, 14vh);
    height: clamp(1vh, 12vh, 14vh):
    object-fit: contain;
    margin: 2.2vh auto;
    border-radius: 12px;
    cursor: pointer;
    }

  `;

  render() {
    return html`
    <div class="social-container">

    <a href="https://www.linkedin.com/in/joshua-mcleod-348306354/" 
          target="_blank"  
          rel="noopener noreferrer">
          <img src="socialwid/linkinpfp.jpeg" alt="LinkedIn Profile">
        </a>

<a href="https://github.com/JoshMcleods" 
          target="_blank"  
          rel="noopener noreferrer">
          <img src ="socialwid/githubpfp.png" alt="Github Profile" />
        </a>

         <a href="https://tryhackme.com/p/cookiemansp" 
          target="_blank"  
          rel="noopener noreferrer">
          <img src ="socialwid/thmpfp.png" alt="thm Profile" />
        </a>

        </div>
    `;
  }
}

customElements.define('social-widget', SocialWidget);