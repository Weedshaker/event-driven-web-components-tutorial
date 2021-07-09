// @ts-check

export default class TutorialFour extends HTMLElement {
  constructor() {
    super()
    console.log('constructorFour')
  }
  connectedCallback() {
    console.log('connectedFour')
    if (this.shouldComponentRenderHTML()) this.renderHTML()
    if (this.shouldComponentRenderCSS()) this.renderCSS()
  }
  disconnectedCallback() {
    console.log('disconnectedFour')
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
        color: pink;
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
      <h2>Tutorial 4 - Structure and Type-Highlighting</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks" target="_blank">Life cycles</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host()" target="_blank">:host</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructuring assignment</a></li>
      </ul>
    `
  }
}
