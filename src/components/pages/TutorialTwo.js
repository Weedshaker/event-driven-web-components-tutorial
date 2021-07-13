// @ts-check

import Page from '../prototypes/Page.js'

export default class TutorialTwo extends Page {
  connectedCallback() {
    super.connectedCallback()
    if (this.shouldComponentRenderHTML()) this.renderHTML()
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderHTML() {
    return !this.innerHTML
  }
  renderHTML() {
    this.html = /* HTML */`
      <h2>Tutorial 2 - Make a Web Component</h2>
      <ol>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial2_1.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial2_1.mp4">link to the video</a> instead.</p>
          </video>
        </li>
        <li><video controls="" width="80%" height="auto">
              <source src="../videos/eventDrivenWebComponentsTutorial2_2.mp4" type="video/mp4">
              <p>Your browser doesn't support HTML5 video. Here is a <a href="../videos/eventDrivenWebComponentsTutorial2_2.mp4">link to the video</a> instead.</p>
          </video>
        </li>
      </ol>
      <ul>
        <li><a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank">Emmet (optional)</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:defined" target="_blank">:defined</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define" target="_blank">customElements.define</a></li>
      </ul>
    `
  }
}
