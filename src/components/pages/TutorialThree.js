// @ts-check

export default class TutorialThree extends HTMLElement {
  connectedCallback() {
    if (this.shouldComponentRenderHTML()) this.renderHTML()
    if (this.shouldComponentRenderCSS()) this.renderCSS()
  }
  /**
   * checks if render is needed
   *
   * @return {boolean}
   */
  shouldComponentRenderCSS() {
    return !this.querySelector('style')
  }
  renderCSS() {
    const style = document.createElement('style')
    style.textContent = /* CSS */`
      ${this.tagName} {
        color: orange;
      }
    `
    this.appendChild(style)
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
    this.innerHTML = /* HTML */`
      <h2>Tutorial 3 - Load a Web Component</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">import</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructuring assignment</a></li>
      </ul>
    `
  }
}
