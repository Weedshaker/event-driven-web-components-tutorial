export default class TutorialTwo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* HTML */`
      <h2>Tutorial 2 - Make a Web Component</h2>
      <ul>
        <li><a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank">Emmet (optional)</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:defined" target="_blank">:defined</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define" target="_blank">customElements.define</a></li>
      </ul>
    `
  }
}
