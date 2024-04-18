import { LitElement, html, css } from "lit";

export class Dialog extends LitElement {
  static get tag() {
    return "dialog-box";
  }

  constructor() {
    super();
    this.title = "title";
    this.text = "text";
    this.open = false;
  }

  static get styles() {
    return css`
      :host {
        color: black;
        display: block;
      }
      
      .container {
        width: 20vw;
        padding: 20px;
        transition: all 250ms ease-in;
        border-radius: 8px;
        transform: scale(1);
        top: 40%;
        left: 40%;
        position: fixed;
        background-color: rgba(265, 265, 265, 0.9); /* Semi-transparent background */
        z-index: 999; /* Ensure it's above other content */
      }

      .hidden {
        transform: scale(0);
        transition: all 100ms ease-in;
      }

      .x-button {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        float: right;
      }

      .x-button:hover, .x-button:focus, .x-button:active{
        background-color: maroon;
      }
    `;
  }

  render() {
    return html`<div class="${this.open? "container" : "hidden"}">
        <button class="x-button" @click=${this.openFalse}>X</button>
        <div>
          <h1>${this.title}</h1>
          <p>${this.text}</p>
          <p>${this.open}</p>
        </div>
    </div>`;
  }

  firstUpdated() {
    this.addOpenImageEventListener();
  }

  addOpenImageEventListener() {
    document.body.addEventListener("open-gallery", this.openTrue.bind(this));
  }

  openTrue() {
    this.open = true;
  }

  openFalse() {
    this.open = false;
  }

  static get properties() {
    return {
      title: { type: String, Reflect: true },
      text: { type: String, Reflect: true },
      open: { type: Boolean, Reflect: true },
    };
  }
}

globalThis.customElements.define(Dialog.tag, Dialog);
