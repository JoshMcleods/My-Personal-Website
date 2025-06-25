import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class ProjectWidget extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .navigation {
      margin-top: 20px;
    }

    .navigation button {
      margin: 0 10px;
      padding: 10px 20px;
      font-size: 16px;
    }

    img {
      width: clamp(1vh, 50vh, 40vh);
      height: clamp(1vh, 20vh, 20vh);
      object-fit: contain;
      margin-top: 50px;
      border-radius: 25px;
      cursor: pointer;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      color: black;
      text-decoration: underline;
      text-underline-offset: 8px;
    }

    .body-para {
      font-size: 14px;
      color: black;
      width: 400px;
      text-align: center;
    }

    table {
      margin-top: 20px;
      border-collapse: collapse;
    }

    th {
      color: orange;
      padding: 8px;
    }

    td {
      color: red;
      width: 30vh;
      padding: 8px;
      text-align: center;
    }
  `;

  static properties = {
    currentIndex: { type: Number },
    projects: { type: Array },
  };

  constructor() {
    super();
    this.currentIndex = 0;
    this.projects = [
      {
        image: 'projectwidget/firstwebsite.png',
        title: 'Website Project',
        description: 'This is the body paragraph where I talk about the project, how API was implemented and how auth tokens were used, how the widgets work and what they do etc.',
        table: [
          ['Practice table', 'js playing around'],
        ],
      },
      {
        image: 'projectwidget/secondproject.png',
        title: 'Second Project',
        description: 'Description for the second project goes here.',
        table: [
          ['Feature A', 'Implementation details'],
        ],
      },
      // Add more projects as needed
    ];
  }

  navigate(direction) {
    const total = this.projects.length;
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + total) % total;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % total;
    }
  }

  render() {
    const project = this.projects[this.currentIndex];
    return html`
      <div class="container">
        <img src="${project.image}" alt="${project.title}" />
        <h1>${project.title}</h1>
        <p class="body-para">${project.description}</p>
        <table>
          ${project.table.map(
      row => html`<tr>${row.map(cell => html`<td>${cell}</td>`)}</tr>`
    )}
        </table>
        <div class="navigation">
          <button @click="${() => this.navigate('left')}">← Previous</button>
          <button @click="${() => this.navigate('right')}">Next →</button>
        </div>
      </div>
    `;
  }
}

customElements.define('project-widget', ProjectWidget);
